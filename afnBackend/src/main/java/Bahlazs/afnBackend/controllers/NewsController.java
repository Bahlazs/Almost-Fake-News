package Bahlazs.afnBackend.controllers;

import Bahlazs.afnBackend.services.NewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/news/")
public class NewsController {

    private final NewService newService;

    @Autowired
    public NewsController(NewService newService) {
        this.newService = newService;
    }


    @PostMapping("/add-news")
    public ResponseEntity<Void> addNews(@RequestBody  request)

}
