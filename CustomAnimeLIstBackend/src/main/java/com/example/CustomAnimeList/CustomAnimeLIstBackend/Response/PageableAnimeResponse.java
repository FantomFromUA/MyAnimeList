package com.example.CustomAnimeList.CustomAnimeLIstBackend.Response;

import com.example.CustomAnimeList.CustomAnimeLIstBackend.Entity.Anime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PageableAnimeResponse {

    private List<Anime> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean last;

}
