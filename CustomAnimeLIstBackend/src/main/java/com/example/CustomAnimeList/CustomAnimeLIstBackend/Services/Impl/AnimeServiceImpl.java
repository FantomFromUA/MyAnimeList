package com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.Impl;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories.AnimeRepository;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Response.PageableAnimeResponse;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnimeServiceImpl implements AnimeService {

    @Value("${my.suggestions.ids}")
    private int[] mySuggestionsAnimeIds;

    private AnimeRepository animeRepository;

    @Autowired
    public AnimeServiceImpl(AnimeRepository animeRepository) {
        this.animeRepository = animeRepository;
    }

    @Override
    public PageableAnimeResponse getAllAnimes(int pageNumber, int pageSize, String sortBy, String sortType) {
        Page<Anime> animes = animeRepository.findAll(PageRequest.of(pageNumber, pageSize,
                Sort.by(sortType.equals("DESC") ? Sort.Direction.DESC : Sort.Direction.ASC, sortBy)));

        PageableAnimeResponse pageableAnimeResponse = PageableAnimeResponse
                .builder()
                .content(animes.getContent())
                .pageNumber(animes.getNumber())
                .pageSize(animes.getSize())
                .totalElements(animes.getTotalElements())
                .totalPages(animes.getTotalPages())
                .last(animes.isLast())
                .build();

        return pageableAnimeResponse;
    }

    @Override
    public Anime getAnimeById(int animeId) {
        Optional<Anime> anime = animeRepository.findById(animeId);

        return anime.orElseGet(null);
    }

    @Override
    public List<Anime> getRandomAnimes(int limit) {
        return animeRepository.getRandomAnimes(limit);
    }

    @Override
    public List<Anime> searchAnimeByTitleOrTitleSynonyms(String title, int limit) {
        return animeRepository.searchAnimeByTitleOrTitleSynonyms(title.toLowerCase(), PageRequest.of(0, limit));
    }

    @Override
    public List<Anime> getTopScoredAnime(int limit) {
        return animeRepository.getTopScoredAnimes(PageRequest.of(0, limit));
    }

    @Override
    public List<Anime> getMostPopularAnime(int limit) {
        return animeRepository.getMostPopularAnimes(PageRequest.of(0, limit));
    }

    @Override
    public List<Anime> getMySuggestions() {
        List<Anime> animeList = new ArrayList<>();

        for(int id : mySuggestionsAnimeIds){
            animeList.add(animeRepository.findById(id).get());
        }

        return animeList;
    }


}
