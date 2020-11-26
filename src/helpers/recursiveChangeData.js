const getInterval = () => Math.ceil(Math.random() * 1000 * 2);

export const recursiveChangeData = (emitter, emitterName) => {
  let interval = getInterval();
  if (interval < 100) {
    interval = getInterval();
  }
  setTimeout(() => {
    emitter.emit(emitterName, {
      system: emitterName,
      data: interval,
      error: interval > 1000 ? "error" : "",
    });
    recursiveChangeData(emitter, emitterName);
  }, interval > 2000 ? 2000 : interval)
}