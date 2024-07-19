document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-comment");
  const commentText = document.getElementById("comment-text");
  const commentsContainer = document.getElementById("comments-container");

  // Get carId from data attribute

  const carId = document.querySelector(".container").dataset.carId;

  const newComment = async (carId, commentContent) => {
    const response = await fetch(`/api/cars/${carId}/comments`, {
      // Adjusted the URL for comments endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment_text: commentContent }),
    });
    return response;
  };

  const submitCommentHandler = async (event) => {
    event.preventDefault();

    const commentContent = commentText.value.trim();

    if (commentContent) {
      try {
        const response = await newComment(carId, commentContent);
        if (!response.ok) {
          throw new Error("Failed to add comment");
        }
        const newCommentData = await response.json();
        // Clear the textarea
        commentText.value = "";
        // Render the new comment
        const commentHTML = `
                    <div class="comment">
                        <p>${newCommentData.comment_text}</p>
                        <p><small>Posted by ${newCommentData.user.name} on ${new Date(newCommentData.createdAt).toLocaleDateString()}</small></p>
                    </div>
                `;
        commentsContainer.innerHTML += commentHTML;
      } catch (error) {
        console.error("Error adding comment:", error);
        // Handle error display or logging as needed
      }
    }
  };

  submitButton.addEventListener("click", submitCommentHandler); // Adjusted to 'click' event
});
