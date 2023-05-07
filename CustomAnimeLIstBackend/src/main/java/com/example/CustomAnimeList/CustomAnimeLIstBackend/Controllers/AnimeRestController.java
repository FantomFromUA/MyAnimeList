package com.example.CustomAnimeList.CustomAnimeLIstBackend.Controllers;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Response.PageableAnimeResponse;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animes")
@CrossOrigin(origins = "http://localhost:3000/")
public class AnimeRestController {

    private AnimeService animeService;


    @Autowired
    public AnimeRestController(AnimeService animeService) {
        this.animeService = animeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anime> getAnimeById(@PathVariable(name = "id") int id){
        Anime anime = animeService.getAnimeById(id);

        if(anime == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.ok(anime);
    }

    @GetMapping
    public ResponseEntity<PageableAnimeResponse> getAllAnimes(
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) int pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = "animeStat.score", required = false) String sortBy,
            @RequestParam(value = "sortType", defaultValue = "DESC", required = false) String sortType
    ){
        return ResponseEntity.ok(animeService.getAllAnimes(pageNumber, pageSize, sortBy, sortType));
    }

    @GetMapping("/random")
    public ResponseEntity<List<Anime>> getRandomAnime(
            @RequestParam(value = "limit", defaultValue = "10", required = false) int limit
    ){
        return ResponseEntity.ok(animeService.getRandomAnimes(limit));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Anime>> searchAnimeByTitleOrTitleSynonyms(
            @RequestParam(value = "title") String title,
            @RequestParam(value = "limit", defaultValue = "10", required = false) int limit
    ){
        List<Anime> animeList = animeService.searchAnimeByTitleOrTitleSynonyms(title, limit);
        return ResponseEntity.ok(animeList);
    }

    @GetMapping("/top-scored")
    public ResponseEntity<List<Anime>> getTopScoredAnime(
            @RequestParam(value = "limit", defaultValue = "10", required = false) int limit
    ){
        List<Anime> animeList = animeService.getTopScoredAnime(limit);
        return ResponseEntity.ok(animeList);
    }

    @GetMapping("/most-popular")
    public ResponseEntity<List<Anime>> getMostPopularAnime(
            @RequestParam(value = "limit", defaultValue = "10", required = false) int limit
    ){
        List<Anime> animeList = animeService.getMostPopularAnime(limit);
        return ResponseEntity.ok(animeList);
    }

    @GetMapping("/my-suggestions")
    public ResponseEntity<List<Anime>> getMySuggestions(){
        List<Anime> animeList = animeService.getMySuggestions();
        return ResponseEntity.ok(animeList);
    }
}
