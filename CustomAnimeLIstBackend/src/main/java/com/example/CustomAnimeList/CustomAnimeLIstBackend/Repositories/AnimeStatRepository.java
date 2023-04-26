package com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.AnimeStat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeStatRepository extends JpaRepository<AnimeStat, Integer> {
}
