export function scrollToId(id, smooth = true) {
    document.getElementById(id)?.scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
    });
}
