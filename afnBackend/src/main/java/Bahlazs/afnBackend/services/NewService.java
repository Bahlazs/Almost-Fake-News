package Bahlazs.afnBackend.services;

import Bahlazs.afnBackend.models.News;
import Bahlazs.afnBackend.repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class NewService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAllNews() {return newsRepository.findAll();}

    public void saveNews(News news) {newsRepository.save(news);}

    public String getCurrentDateAndTimeInString(LocalDateTime currentDateTime) {
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        String formatedDateTime = currentDateTime.format(dateFormatter);
        return formatedDateTime;
    }

}
