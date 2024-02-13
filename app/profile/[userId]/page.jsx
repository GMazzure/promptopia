"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

function UserProfile({params}) {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.userId}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    const fetchUser = async () => {
      const response = await fetch(`/api/users/${params.userId}/profile`);
      const data = await response.json();

      setUser(data);
    };

    console.log("session", session);
    if (!!params.userId) {
      fetchPosts();
      fetchUser();
    }
  }, []);

  return (
    <>
      { user ? (
        <Profile
          name={`${user.username}'s`}
          desc={`Welcome to ${user.username}'s profile page`}
          data={posts}
        />
      ) : (
        <div>Carregando perfil de usuário...</div>
      )}
    </>
  );
}

export default UserProfile;
