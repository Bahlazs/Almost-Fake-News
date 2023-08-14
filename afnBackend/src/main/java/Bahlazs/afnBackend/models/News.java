package Bahlazs.afnBackend.models;

import Bahlazs.afnBackend.enums.NewsType;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@NoArgsConstructor
@EqualsAndHashCode
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "NEWS_ID", nullable = false)
    private Long id;
    private String newsHeader;
    private String newsBody;
    private Date newsDate;


    public News(String newsHeader, String newsBody, Date newsDate, NewsType type) {
        this.newsHeader = newsHeader;
        this.newsBody = newsBody;
        this.newsDate = newsDate;

    }


    public String getNewsHeader() {
        return newsHeader;
    }

    public String getNewsBody() {
        return newsBody;
    }

    public Date getNewsDate() {
        return newsDate;
    }


}