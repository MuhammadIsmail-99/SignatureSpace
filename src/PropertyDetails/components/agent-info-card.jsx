// Use standard <img> for agent avatar
import { Phone, Mail } from "lucide-react"
import "../styles/agent-info-card.css"

export function AgentInfoCard({ agent }) {
  if (!agent) return null

  return (
    <div className="agent-card">
      <div className="agent-header">
        <img
          src="/placeholder.svg?height=80&width=80" // Placeholder as agent image not in API
          alt="Agent Avatar"
          width={80}
          height={80}
          className="agent-avatar"
        />
        <div className="agent-info">
          <h3 className="agent-name">{agent.name}</h3>
          <p className="agent-title">Local Property Agent</p>
        </div>
      </div>
      <div className="agent-content">
        <p className="agent-description">
          {agent.name} is a highly experienced agent with over 10 years in the local real estate market. She's dedicated
          to providing excellent service.
        </p>
        <div className="agent-buttons">
          <a href={`tel:${agent.phone}`} className="agent-button">
            <Phone className="icon" />
            Call
          </a>
          <a href={`mailto:${agent.email}`} className="agent-button">
            <Mail className="icon" />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
