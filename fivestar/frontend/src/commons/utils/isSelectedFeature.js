const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"NewsArticle",


"Comment",


"Report",


"[XOR] <<ViewContainer>> Ticket",


"Event",


"Home",
]))
