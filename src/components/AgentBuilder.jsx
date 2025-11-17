import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function AgentBuilder() {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', role: 'AI Agent', channel: 'omni', persona: '' })
  const [message, setMessage] = useState('')
  const [chatReply, setChatReply] = useState('')

  const loadAgents = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/agents`)
      const data = await res.json()
      setAgents(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadAgents() }, [])

  const createAgent = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_BASE}/api/agents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setForm({ name: '', role: 'AI Agent', channel: 'omni', persona: '' })
        loadAgents()
      }
    } catch (e) { console.error(e) }
  }

  const sendChat = async (agentId) => {
    setChatReply('')
    try {
      const res = await fetch(`${API_BASE}/api/agent/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent_id: agentId, message })
      })
      const data = await res.json()
      setChatReply(data.reply)
    } catch (e) { console.error(e) }
  }

  return (
    <section id="builder" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Agent Builder</h2>
        <p className="mt-2 text-gray-600">Create agents, then chat to test their persona.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <form onSubmit={createAgent} className="md:col-span-1 bg-white/80 backdrop-blur rounded-xl border shadow-sm p-5 space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Support Agent" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <input value={form.role} onChange={e=>setForm({...form, role:e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Channel</label>
              <select value={form.channel} onChange={e=>setForm({...form, channel:e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2">
                <option value="omni">Omni</option>
                <option value="voice">Voice</option>
                <option value="chat">Chat</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Persona</label>
              <textarea value={form.persona} onChange={e=>setForm({...form, persona:e.target.value})} rows={4} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="You are a helpful, concise support assistant..." />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-2">Create Agent</button>
          </form>

          <div className="md:col-span-2 bg-white/80 backdrop-blur rounded-xl border shadow-sm p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Agents</h3>
              <button onClick={loadAgents} className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Refresh</button>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {loading ? (
                <div className="text-gray-600">Loading...</div>
              ) : agents.length === 0 ? (
                <div className="text-gray-600">No agents yet. Create one on the left.</div>
              ) : (
                agents.map(a => (
                  <div key={a._id} className="p-4 border rounded-lg bg-white shadow-sm">
                    <div className="font-semibold">{a.name}</div>
                    <div className="text-sm text-gray-600">{a.role} • {a.channel}</div>
                    {a.persona && <div className="text-xs mt-1 text-gray-500 line-clamp-2">{a.persona}</div>}
                    <div className="mt-3 flex gap-2 items-center">
                      <input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Say hi" className="flex-1 border rounded px-2 py-1" />
                      <button onClick={() => sendChat(a._id)} className="px-3 py-1 rounded bg-indigo-600 text-white">Send</button>
                    </div>
                    {chatReply && (
                      <div className="mt-2 text-sm bg-indigo-50 border border-indigo-100 text-indigo-900 rounded p-2">{chatReply}</div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentBuilder
