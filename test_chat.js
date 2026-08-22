async function test() {
  const res = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: "oi" }],
      candidatoId: "lula",
      isGovernor: false
    })
  });
  console.log(res.status, await res.text());
}
test();

