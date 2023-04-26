package com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {
}
