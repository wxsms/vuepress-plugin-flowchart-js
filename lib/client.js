import FlowChart from './FlowChart'

export default function (ctx) {
  if (typeof window !== 'undefined') {
    const { Vue } = ctx
    Vue.component('FlowChart', FlowChart)
  }
}
