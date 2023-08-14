package Bahlazs.afnBackend.models;


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
    private String title;
    private String newsHeader;
    private String newsBody;
    private String newsDate;


    public News(String title, String newsHeader, String newsBody, String newsDate) {
        this.title = title;
        this.newsHeader = newsHeader;
        this.newsBody = newsBody;
        this.newsDate = newsDate;
    }

}