package Bahlazs.afnBackend.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsAddRequest {

    private String title;
    private String head;
    private String body;

}
