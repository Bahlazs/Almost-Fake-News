package Bahlazs.afnBackend.controllers;

import Bahlazs.afnBackend.DTOs.NewsAddRequest;
import Bahlazs.afnBackend.models.News;
import Bahlazs.afnBackend.services.NewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/news/")
public class NewsController {

    private final NewService newService;

    @Autowired
    public NewsController(NewService newService) {
        this.newService = newService;
    }


    @PostMapping("/add")
    public ResponseEntity<Void> addNews(@RequestBody NewsAddRequest request) {
        ResponseEntity<Void> response;
        if (request.getTitle() != null && request.getHead() != null && request.getBody() != null){
            LocalDateTime currentDateTime = LocalDateTime.now();
            News newNews = new News(request.getTitle(),
                                    request.getHead(),
                                    request.getBody(),
                                    newService.getCurrentDateAndTimeInString(currentDateTime));
            newService.saveNews(newNews);
            response = ResponseEntity.ok().build();
        }else {
            response = ResponseEntity.noContent().build();
        }
        return response;
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<News>> getAllNews() {
        ResponseEntity<List<News>> response;
        List<News> allNews = newService.getAllNews();
        if (!allNews.isEmpty()) {
            response = ResponseEntity.ok().body(allNews);
        }else {
            response = ResponseEntity.status(400).body(null);
        }
        return response;
    }

}
