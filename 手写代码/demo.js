function timer(time) {
  const startTime = new Date
  console.log(startTime);
  while (true) {
    const now = new Date
    console.log(now);
    if (now - startTime >= time) {
      console.log('误差', now - startTime - time);
      return;
    }
  }
}
timer(1000);