package com.example.CustomAnimeList.CustomAnimeLIstBackend.Services;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Response.PageableAnimeResponse;

import java.util.List;

public interface AnimeService {

    PageableAnimeResponse getAllAnimes(int pageNumber, int pageSize, String sortBy, String sortType);

    Anime getAnimeById(int animeId);

    List<Anime> getRandomAnimes(int limit);

}
