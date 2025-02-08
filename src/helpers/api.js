export async function getData() {
  const res = await fetch(
    "https://api.github.com/repos/amnesia2k/capstone-film-radar"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}
