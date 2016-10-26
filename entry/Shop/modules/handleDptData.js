export default function handleDptData({ activeDptID, activeSubDptID, data }) {
  return data.map((dpt) => ({
    id: dpt.id,
    name: dpt.name,
    active: activeDptID == dpt.id,
    subDpts: dpt.DptSubs.map((subDpt) => ({
      id: subDpt.id,
      name: subDpt.name,
      active: activeSubDptID == subDpt.id
    }))
  }))
}
