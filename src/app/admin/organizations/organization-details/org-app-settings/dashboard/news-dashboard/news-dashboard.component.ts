import { Component } from '@angular/core';
import { NewsItem } from './interfaces/news.interface';

@Component({
    selector: 'app-news-dashboard',
    templateUrl: './news-dashboard.component.html',
    styleUrl: './news-dashboard.component.scss',
    standalone: false,
})
export class NewsDashboardComponent {
    newsItems: NewsItem[] = [
        {
            title: 'College Closure Due to Heavy Rain',
            date: '29 Sep 2024',
            views: 1,
            imageUrl: 'assets/images/logos/CapHighResT.png',
            description:
                'Due to the heavy rain and adverse weather conditions, the college will remain closed today to ensure the safety of all students and staff. We encourage everyone to stay indoors and avoid unnecessary travel.',
            pdfs: [
                {
                    link: '#',
                    pages: 7,
                    title: 'Safety Guidelines for Heavy Rainfall: Stay Safe and Informed',
                },
            ],
            comments: [
                {
                    author: 'Julie Watt',
                    authorImage: 'assets/images/profiles/ProfilePicture.png',
                    text: 'Thanks for keeping us informed about the college closure. It’s good to know that our safety is a top priority!',
                    commentDate: '01 Feb 2024 08:55 AM',
                },
            ],
            likes: 0,
            author: 'Julie Watt',
            authorImage: 'assets/images/profiles/ProfilePicture.png',
            authorComment: 'Great tool!',
            authorCommentDate: '23 Jan 2024 09:00 AM',
        },
        {
            title: 'EdOpSys Achieves Excellence Award in Educational Operations',
            date: '25 Sep 2024',
            views: 1,
            imageUrl: 'assets/images/logos/CapHighResT.png',
            description:
                'We are thrilled to announce that EdOpSys has been honored with the Excellence Award in Educational Operations! This prestigious recognition highlights our commitment to innovation and excellence in the education sector.',
            pdfs: [
                {
                    link: '#',
                    pages: 7,
                    title: 'EdOpSys Recognized with Excellence Award in Educational Operations',
                },
            ],
            comments: [
                {
                    author: 'Julie Watt',
                    authorImage: 'assets/images/profiles/ProfilePicture.png',
                    text: 'Congratulations!!!.. To the entire EdOpSys team on receiving the Excellence Award in Educational Operations! Your hard work and dedication have truly made a remarkable impact in the field of education.',
                    commentDate: '26 Sep 2024 09:35 AM',
                },
            ],
            likes: 0,
            author: 'Julie Watt',
            authorImage: 'assets/images/profiles/ProfilePicture.png',
            authorComment: 'Great tool!',
            authorCommentDate: '23 Jan 2024 09:00 AM',
        },
    ];
}
