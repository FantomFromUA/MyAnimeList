package com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
@Entity
@Table(name = "anime_stats")
public class AnimeStat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "score")
    private Double score;

    @Column(name = "ranking")
    private Integer rank;

    @Column(name = "popularity")
    private Integer popularity;

    @Column(name = "members")
    private Integer members;

    public AnimeStat() {
    }

    public AnimeStat(Double score, Integer rank, Integer popularity, Integer members) {
        this.score = score;
        this.rank = rank;
        this.popularity = popularity;
        this.members = members;
    }
}