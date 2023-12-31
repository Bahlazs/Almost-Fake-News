package Bahlazs.afnBackend.models;


import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@NoArgsConstructor
@EqualsAndHashCode
@Getter
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "NEWS_ID", nullable = false)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String newsHeader;
    @Column(columnDefinition = "TEXT")
    private String newsBody;
    private String newsDate;


    public News(String title, String newsHeader, String newsBody, String newsDate) {
        this.title = title;
        this.newsHeader = newsHeader;
        this.newsBody = newsBody;
        this.newsDate = newsDate;
    }

}