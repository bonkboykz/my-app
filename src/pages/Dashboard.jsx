import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { API_TOKEN, BACKEND_URL } from "../constants";

import "./Dashboard.css";
import { useSelector } from "react-redux";
export function DashboardPage() {
  const auth = useSelector((state) => state.auth);

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/animes`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        const userId = auth.user.id;
        const userProgress = (
          await fetch(
            `${BACKEND_URL}/user-progresses?filters[user][$eq]=${userId}&populate[anime][fields][0]=id`,
            {
              headers: {
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ).then((response) => response.json())
        ).data;

        const animeWithProgress = data.data.map((anime) => {
          const progress = userProgress.find(
            (progress) => progress.anime.id === anime.id
          );

          return {
            ...anime,
            userProgress: progress?.episodes || 0,
          };
        });

        setAnimes(animeWithProgress);
      });
  }, [auth.user.id]);

  return (
    <div className="Dashboard">
      <div className="Anime-Grid">
        {animes.map((anime) => (
          <Card
            key={anime.id}
            title={anime.title}
            description={anime.description}
            cover={anime.cover_url}
            maxProgress={anime.max_episodes}
            userProgress={anime.userProgress}
          />
        ))}
      </div>
    </div>
  );
}
