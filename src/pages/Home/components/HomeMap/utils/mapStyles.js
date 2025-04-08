export const estadoStyle = (feature, estadosSelecionados) => ({
    fillColor: estadosSelecionados.includes(feature.id) ? "#288bc8" : "black",
    weight: 0,
    opacity: 0,
    fillOpacity: 0.3,
});