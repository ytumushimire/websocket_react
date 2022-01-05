import React, { Component } from 'react'
import W3CWebSocket from 'websocket'
export default class App extends Component {

  componentDidMount() {
    const ws = new W3CWebSocket.w3cwebsocket(`${process.env.REACT_APP_WS_URL}/ws/statistics/?api_key=${process.env.REACT_APP_API_KEY}`)
    ws.onopen = () => {
      ws.send(JSON.stringify({ 'api_key': 'SHPCzFqb.1Wi9Mkn3VPQuT3SQ6F5Y1EhzFeYaVW4O' }))
      console.log('connection open')
    }
    ws.onerror = (e) => {
      console.log(e)
    }
    ws.onclose = () => {
      console.log('connection close')
    }

    ws.onmessage = (e) => {
      // const data = JSON.parse(e.data)
      // const { type, payload } = data
      console.log(JSON.parse(e.data))
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
