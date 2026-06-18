export async function logoutUser(router) {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    router.push("/auth/login");
  }
}