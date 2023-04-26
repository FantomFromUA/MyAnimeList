package com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name = "animes")
public class Anime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "english_title")
    private String englishTitle;

    @Column(name = "japanese_title")
    private String japaneseTitle;

    @Column(name = "title_synonyms")
    private String titleSynonyms;

    @Column(name = "status")
    private String status;

    @Column(name = "episodes")
    private Integer episodes;

    @Column(name = "premiered")
    private String premiered;

    @Column(name = "studio")
    private String studio;

    @Column(name = "source")
    private String source;

    @Column(name = "rating")
    private String rating;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "type")
    private String type;

    @OneToOne
    @JoinColumn(name = "stats_id")
    private AnimeStat animeStat;

    public Anime() {
    }

    public Anime(String title, String genre, String englishTitle, String japaneseTitle, String titleSynonyms, String status, Integer episodes, String premiered, String studio, String source, String rating, String description, String imageUrl, String type, AnimeStat animeStat) {
        this.title = title;
        this.genre = genre;
        this.englishTitle = englishTitle;
        this.japaneseTitle = japaneseTitle;
        this.titleSynonyms = titleSynonyms;
        this.status = status;
        this.episodes = episodes;
        this.premiered = premiered;
        this.studio = studio;
        this.source = source;
        this.rating = rating;
        this.description = description;
        this.imageUrl = imageUrl;
        this.type = type;
        this.animeStat = animeStat;
    }
}