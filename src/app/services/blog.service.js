export const updateLikes = async (blogId, currentLikes, setLikes, setClapped) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blogs/update/user-clap/${blogId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    totalLikes: currentLikes + 1,
                }),
            }
        );

        if (response.ok) {
            setLikes(currentLikes + 1);
            if (setClapped) {
                setClapped(true);
                setTimeout(() => setClapped(false), 500);
            }
        } else {
            console.error("Failed to update likes");
        }
    } catch (error) {
        console.error("Error updating likes:", error);
    }
};