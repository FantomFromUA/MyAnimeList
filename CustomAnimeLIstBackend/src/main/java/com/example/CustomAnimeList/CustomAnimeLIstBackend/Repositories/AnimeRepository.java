package com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {

    @Query(value = "select anime from Anime anime order by RAND() limit :limit")
    List<Anime> getRandomAnimes(@Param("limit") int limit);

    @Query(value = "select a from  Anime a where lower(a.title) like %:title% or lower(a.titleSynonyms) like %:title% or a.englishTitle like %:title%  order by a.animeStat.score desc")
    List<Anime> searchAnimeByTitleOrTitleSynonyms(@Param("title") String title, Pageable pageable);

    @Query(value = "select a from Anime a order by a.animeStat.score desc")
    List<Anime> getTopScoredAnimes(Pageable pageable);

    @Query(value = "select a from Anime a order by a.animeStat.popularity")
    List<Anime> getMostPopularAnimes(Pageable pageable);

}
