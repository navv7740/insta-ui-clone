// LIKE BUTTON
const likeButtons = document.querySelectorAll(".fa-heart");

likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("fa-regular");
        btn.classList.toggle("fa-solid");

        if (btn.classList.contains("fa-solid")) {
            btn.style.color = "#ff3040";
            btn.style.transform = "scale(1.3)";

            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);
        } else {
            btn.style.color = "#222";
        }
    });
});

// SAVE BUTTON 
const saveButtons = document.querySelectorAll(".fa-bookmark");

saveButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("fa-regular");
        btn.classList.toggle("fa-solid");

        btn.style.color = btn.classList.contains("fa-solid") ? "#6366F1" : "#222";
    });
});

// FOLLOW BUTTON
const followBtns = document.querySelectorAll(".suggestion button");

followBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isFollowing = btn.innerText === "Follow";

        btn.innerText = isFollowing ? "Following" : "Follow";
        btn.style.background = isFollowing ? "#16a34a" : "#6366F1";
    });
});

// NOTIFICATION PANEL 
const notificationBtn = document.getElementById("notification-btn");
const notificationPanel = document.getElementById("notification-panel");

notificationBtn.addEventListener("click", () => {
    notificationPanel.classList.toggle("show");
});

//  POST IMAGE MODAL 
const modal = document.getElementById("postModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".post-image img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// INFO POPUP 
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");

function openPopup(title, message) {
    popupTitle.innerText = title;
    popupText.innerText = message;
    popup.style.display = "flex";
}

document.getElementById("close-popup").onclick = () => {
    popup.style.display = "none";
};

document.getElementById("message-btn").onclick = () => {
    openPopup("Messages", "No new messages.");
};

document.getElementById("saved-btn").onclick = () => {
    openPopup("Saved Posts", "You haven't saved any posts yet.");
};

document.getElementById("settings-btn").onclick = () => {
    openPopup("Settings", "Dark Mode and Theme settings coming soon.");
};

document.getElementById("logout-btn").onclick = () => {
    openPopup("Logout", "This is a frontend UI clone. Logout functionality is not implemented.");
};

// SIDEBAR 
document.getElementById("home-btn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("explore-btn").onclick = () => {
    document.querySelector(".feed").scrollIntoView({ behavior: "smooth" });
};
// SEARCH FEATURE
const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    posts.forEach((post) => {
        const username = post.querySelector(".post-header h4").innerText.toLowerCase();

        if (username.includes(value)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});
