package com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.Impl;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Repositories.AnimeRepository;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Response.PageableAnimeResponse;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimeServiceImpl implements AnimeService {

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


}
