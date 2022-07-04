function formatSongTime(duration = 0){
  duration = duration / 1000
  const m = (Math.floor(duration / 60) + '').padStart(2, '0')
  const s = (Math.floor(duration % 60) + '').padStart(2, '0')
  return `${m}:${s}`
}

export {formatSongTime}