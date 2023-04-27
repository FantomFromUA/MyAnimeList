package com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {

    @Query(value = "SELECT anime from Anime anime order by RAND() LIMIT :limit")
    List<Anime> getRandomAnimes(@Param("limit") int limit);

}
