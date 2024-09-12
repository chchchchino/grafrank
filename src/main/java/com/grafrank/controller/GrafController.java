package com.grafrank.controller;

import com.grafrank.model.Art;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/grafs")
public class GrafController {
    private List<String> grafs = new ArrayList<>();
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Art> getAllGrafs() {
        List<Art> arts = new ArrayList<>();

        Art art1 = new Art();
        art1.setId(1);
        art1.setName("Big Letters");
        Art art2 = new Art();
        art2.setId(2);
        art2.setName("Small Letters");
        Art art3 = new Art();
        art3.setId(3);
        art3.setName("Red Letters");
        Art art4 = new Art();
        art4.setId(4);
        art4.setName("Blue Letters");
        Art art5 = new Art();
        art5.setId(5);
        art5.setName("No Letters");
        Art art6 = new Art();
        art6.setId(6);
        art6.setName("Landscape Art");
        arts.add(art1);
        arts.add(art2);
        arts.add(art3);
        arts.add(art4);
        arts.add(art5);
        arts.add(art6);
        return arts;
    }
}
