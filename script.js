document.getElementById("postButton").addEventListener("click", function () {
  const postContent = document.getElementById("postContent").value;

  if (postContent.trim()) {
    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
            <p>${postContent}</p>
            <button class="likeButton">Like</button>
            <span class="likeCount">0</span>
        `;

    document.getElementById("posts").prepend(post);
    document.getElementById("postContent").value = ""; // Clear input

    const likeButton = post.querySelector(".likeButton");
    const likeCount = post.querySelector(".likeCount");
    let count = 0;

    likeButton.addEventListener("click", function () {
      count++;
      likeCount.textContent = count;
    });
  } else {
    alert("Please enter some content for your post.");
  }
});
