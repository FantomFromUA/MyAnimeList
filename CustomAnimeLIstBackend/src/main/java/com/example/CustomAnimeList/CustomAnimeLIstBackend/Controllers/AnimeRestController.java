package com.example.CustomAnimeList.CustomAnimeLIstBackend.Controllers;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Response.PageableAnimeResponse;
import com.example.CustomAnimeList.CustomAnimeLIstBackend.Services.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/animes")
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
}
