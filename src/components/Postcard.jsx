import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const PostCard = () => {
  const { t } = useTranslation();

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState({});

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]).then(([allPosts, usersData]) => {
      const selectedPosts = [];
      const usedUserIds = new Set();

      for (let i = 0; i < allPosts.length && selectedPosts.length < 5; i++) {
        const post = allPosts[i];
        if (!usedUserIds.has(post.userId)) {
          usedUserIds.add(post.userId);
          const randomMinutesAgo = Math.floor(Math.random() * 120);
          const createdAt = new Date(Date.now() - randomMinutesAgo * 60000);
          selectedPosts.push({ ...post, createdAt });
        }
      }

      setPosts(selectedPosts);
      setUsers(usersData);

      const initialLikes = {};
      const initialComments = {};

      selectedPosts.forEach((post) => {
        initialLikes[post.id] = Math.floor(Math.random() * 96) + 5;
        initialComments[post.id] = Math.floor(Math.random() * 10) + 1;
      });

      setLikeCounts(initialLikes);
      setCommentCounts(initialComments);
    });
  }, []);

  const timeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff} ${t("seconds")}`;
    if (diff < 3600) return `${Math.floor(diff / 60)} ${t("minutes")}`;
    return `${Math.floor(diff / 3600)} ${t("hours")}`;
  };

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
      setLikeCounts((prev) => ({ ...prev, [postId]: prev[postId] - 1 }));
    } else {
      setLikedPosts([...likedPosts, postId]);
      setLikeCounts((prev) => ({ ...prev, [postId]: prev[postId] + 1 }));
    }
  };

  const handleAddComment = (postId, text) => {
    if (!text.trim()) return;
    setComments((prev) => {
      const prevComments = prev[postId] || [];
      return {
        ...prev,
        [postId]: [...prevComments, text],
      };
    });
    setCommentInput((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        const user = users.find((u) => u.id === post.userId);

        return (
          <div key={post.id} className="border-b border-gray-700 pb-4 mb-4">
            <div className="flex items-center gap-4 p-4">
              <img
                src={`https://i.pravatar.cc/40?u=${post.userId}`}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="text-sm font-semibold flex items-center gap-2">
                  {user ? user.username : `user_${post.userId}`}
                  <span className="text-xs text-gray-400">
                    {timeAgo(post.createdAt)} {t("ago")}
                  </span>
                </div>
              </div>
            </div>

            <img
              src={`https://picsum.photos/seed/${post.id}/600/400`}
              alt="post"
              className="w-full h-[400px] object-cover"
            />

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => toggleLike(post.id)}
                  >
                    {likedPosts.includes(post.id) ? "❤️" : <GoHeart />}
                  </div>
                  <div className="cursor-pointer">
                    <FaRegComment />
                  </div>
                  <div className="cursor-pointer">
                    <PiShareFat />
                  </div>
                </div>
                <div className="cursor-pointer text-white text-lg">
                  <CiSaveDown2 />
                </div>
              </div>

              <div className="text-xs">
                {likeCounts[post.id] || 0} {t("likes")}
              </div>

              <div className="text-sm mt-2">
                <div className="font-semibold">
                  {user ? user.username : `user_${post.userId}`}
                </div>{" "}
                {post.title}
              </div>

              <div className="text-sm text-gray-500 mt-2">
                {comments[post.id]?.length || commentCounts[post.id] || 0}{" "}
                {t("comments")}
              </div>

              <div className="mt-2 space-y-1">
                {comments[post.id]?.map((comment, index) => (
                  <div key={index} className="text-sm text-gray-200">
                    <span className="font-semibold">
                      {user ? user.username : `user_${post.userId}`}:
                    </span>{" "}
                    {comment}
                  </div>
                ))}
              </div>

              <div className="mt-1">
                <input
                  type="text"
                  placeholder={t("addComment")}
                  className="w-full bg-transparent outline-none border-none py-1 text-sm"
                  value={commentInput[post.id] || ""}
                  onChange={(e) =>
                    setCommentInput((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddComment(post.id, commentInput[post.id]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
