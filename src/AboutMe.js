import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { Title, EducationBlock, PublicationBlock, AwardBlock, TeachingBlock, ICPCBlock } from './Title.js';
import './App.css';

import { Grid, Button, Icon, Divider } from 'semantic-ui-react'
import me from './me.jpg';

export class AboutMe extends Component {
    render() {
        return (
        <div ref={this.props.innerRef}>
            <Title name="About Me" icon="user circle"/>
            <Grid columns={3}>
            <Grid.Column className="AboutMe-img">
                <img className="MyImage"
                src={me} alt={"me"}/>
            </Grid.Column>
            <Grid.Column className="AboutMe-text">
            I am Jihoon Ko (고지훈). I received my Ph.D. in Aritificial Intelligence from <a href='https://gsai.kaist.ac.kr'>Kim Jaechul Graduate School of AI at KAIST</a>, where I was advised by <a href='https://kijungshin.com'>Prof. Kijung Shin</a>. I received my B.S. in Computer Science and Mathematics from KAIST. My current research interests are Graph Mining, Tensor Mining, and Scalable and Efficient Machine Learning.
                <p></p>
                <Button as='a' href='https://www.dropbox.com/scl/fi/ai9kd1cey8uu40qh65gp4/CV_jihoon.pdf?rlkey=nl26bz5jcxc3jh2ksu1ul3p8m&dl=0' primary size='big' className="AboutMe-button">
                  <Icon name='download' /> Download C.V.
                </Button>
                <Divider />
                <Button as='a' href='https://github.com/jihoonko' icon secondary>
                  <Icon name='github' inverted color='white'/>
                </Button>
                <Button as='a' href='mailto:jihoonko@kaist.ac.kr' icon className="AboutMe-button-small">
                  <Icon name='mail' />
                </Button>
                <Button icon as='a' href='mailto:jihoonko@kaist.ac.kr' labelPosition='left' className="AboutMe-button-big">
                  <Icon name='mail' />
                  j1ho0n (at) naver.com
                </Button>
            </Grid.Column>
            </Grid>
        </div>);
    }
}

export class Education extends Component {
    render() {
        return (
        <div ref={this.props.innerRef}>
            <Title name="Education" icon="graduation cap"/>
            <EducationBlock name="Korea Advanced Institute of Science and Technology (KAIST)"
                            details={["Ph.D. in Aritificial Intelligence (Sep. 2019 - Feb. 2025)",
                                      "> Thesis: Compression of Large-scale Real-world Graphs and Tensors",
                                      "B.S. in Computer Science (Mar. 2015 - Sep. 2019)",
                                      "B.S. in Mathematics (Mar. 2015 - Sep. 2019, double major)"
                                    ]}
            />          
        </div>);
    }
}

export class Publications extends Component {
    render() {
        var pubs = [];
        return (
        <div ref={this.props.innerRef}>
            <Title name="Publications" icon="book"/>
            <Header as="h3" className="Award-block">
            <Icon name='archive' />
            <Header.Content><a href="https://scholar.google.com/citations?hl=ko&user=_m0bPIQAAAAJ">Google Scholar</a></Header.Content>
            <Icon name='scholar' /><Icon name='archive' />
            <Header.Content><a href="https://dblp.org/pid/127/7344.html">DBLP</a></Header.Content>
            </Header>
            <PublicationBlock name="Kronecker Generative Models for Power-Law Patterns in Real-World Hypergraphs" idx="[C14]"
                              authors="Minyoung Choe, Jihoon Ko, Taehyung Kwon, Kijung Shin, and Christos Faloutsos"
                              confname="WWW 2025" conflink="https://www2025.thewebconf.org/"
                              paper=""
                              details={{"slides": undefined,
                                        "poster": undefined,
                                        "code and datasets": undefined,
                                        "bib": undefined}}
                              comments=""
                        />
            <PublicationBlock name="DiffIM: Differentiable Influence Minimization with Surrogate Modeling and Continuous Relaxation" idx="[C13]"
                              authors="Junghun Lee, Hyunju Kim, Fanchen Bu, Jihoon Ko, and Kijung Shin"
                              confname="AAAI 2025" conflink="https://aaai.org/conference/aaai/aaai-25/"
                              paper=""
                              details={{"slides": undefined,
                                        "poster": undefined,
                                        "code and datasets": undefined,
                                        "bib": undefined}}
                              comments=""
                        />
            <PublicationBlock name="Estimating Simplet Counts via Sampling" idx="[J8]"
                              authors="Hyunju Kim*, Heechan Moon*, Fanchen Bu, Jihoon Ko, and Kijung Shin"
                              confname="The VLDB Journal" conflink="https://www.springer.com/journal/778"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/simpletVLDBJ2025.pdf"
                              details={{"shorter ver. [C8]": "https://arxiv.org/pdf/2302.05505.pdf",
                                        "code and datasets": "https://github.com/hhyy0401/simplet_counting",
                                        "bib": undefined}}
                              comments=""
                        />
            <PublicationBlock name="BeGin: Extensive Benchmark Scenarios and An Easy-to-use Framework for Graph Continual Learning" idx="[J7]"
                              authors="Jihoon Ko*, Shinhwan Kang*, Taehyung Kwon, Heechan Moon, and Kijung Shin"
                              confname="ACM TIST" conflink="https://dl.acm.org/journal/TIST"
                              paper="https://arxiv.org/pdf/2211.14568"
                              details={{"code and datasets": "https://github.com/ShinhwanKang/BeGin",
                                        "bib": undefined}}
                              comments=""
                        />
            <PublicationBlock name="Compact Lossy Compression of Tensors via Neural Tensor-Train Decomposition" idx="[J6]"
                              authors="Taehyung Kwon, Jihoon Ko, Jinhong Jung, Jun-Gi Jang, and Kijung Shin"
                              confname="Knowledge and Information Systems" conflink="https://www.springer.com/journal/10115"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/tensorcodecKAIS2025.pdf"
                              details={{"shorter ver. [C10]": "https://arxiv.org/pdf/2309.10310.pdf",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/tensorcodecICDM2023.pdf",
                                        "code and datasets": "https://github.com/kbrother/tensorcodec",
                                        "bib": undefined}}
                              comments=""
                        />
            <PublicationBlock name="ELiCiT: Effective and Lightweight Lossy Compression of Tensors" idx="[C12]"
                              authors="Jihoon Ko, Taehyung Kwon, Jinhong Jung, and Kijung Shin"
                              confname="ICDM 2024" conflink="https://icdm2024.org/"
                              paper=""
                              details={{"appendix": "https://github.com/jihoonko/elicit/blob/main/supplementary_material.pdf",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/elicitICDM2024.pdf",
                                        "code and datasets": "https://github.com/jihoonko/icdm24-elicit",
                                        "bib": undefined}}
                              comments="Selected as one of the best-ranked papers of ICDM 2024 for fast-track journal invitation"
                        />
            <PublicationBlock name="Compact Decomposition of Irregular Tensors for Data Compression: From Sparse to Dense to High-Order Tensors" idx="[C11]"
                              authors="Taehyung Kwon, Jihoon Ko, Jinhong Jung, Jun-Gi Jang, and Kijung Shin"
                              confname="KDD 2024" conflink="https://kdd2024.kdd.org/"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/lightitKDD2024.pdf"
                              details={{"poster": "http://dmlab.kaist.ac.kr/~kijungs/posters/lightitKDD2024.pdf",
                                        "appendix": "https://github.com/kbrother/Light-IT/blob/mem_opt/supplement.pdf",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/lightitKDD2024.pdf",
                                        "code and datasets": "https://github.com/kbrother/Light-IT",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/kdd/KwonKJJS24.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Deep Learning Model for Heavy Rainfall Nowcasting in South Korea" idx="[J5]"
                              authors="Seok-Geun Oh, Seok-Woo Son, Young-Ha Kim, Chanil Park, Jihoon Ko, Kijung Shin, Ji-Hoon Ha, and Hyesook Lee"
                              confname="Weather and Climate Extremes" conflink="https://www.sciencedirect.com/journal/weather-and-climate-extremes"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/deepWACE2024.pdf"
                              details={{"bib": "http://dmlab.kaist.ac.kr/~kijungs/bib/deepWACE2024.bib"}}
                              comments=""
                        />
            <PublicationBlock name="Hypergraph Motifs and Their Extensions Beyond Binary" idx="[J4]"
                              authors="Geon Lee*, Seokbum Yoon*, Jihoon Ko, Hyunju Kim, and Kijung Shin"
                              confname="The VLDB Journal" conflink="https://www.springer.com/journal/778"
                              paper="https://arxiv.org/pdf/2310.15668.pdf"
                              details={{"shorter ver. [C4]": "https://arxiv.org/pdf/2003.01853.pdf",
                                        "code and datasets": "https://github.com/jing9044/mochy-with-3h-motif",
                                        "bib": "https://dblp.uni-trier.de/rec/journals/vldb/LeeYKKS24.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="TensorCodec: Compact Lossy Compression of Tensors without Strong Data Assumptions" idx="[C10]"
                              authors="Taehyung Kwon, Jihoon Ko, Jinhong Jung, and Kijung Shin"
                              confname="ICDM 2023" conflink="https://www.cloud-conf.net/icdm2023/"
                              paper="https://arxiv.org/pdf/2309.10310.pdf"
                              details={{"longer ver. [J6]": "http://dmlab.kaist.ac.kr/~kijungs/papers/tensorcodecKAIS2025.pdf",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/tensorcodecICDM2023.pdf",
                                        "code and datasets": "https://github.com/kbrother/tensorcodec",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/icdm/KwonKJS23.html?view=bibtex"}}
                              comments="Received the IEEE ICDM Best Student Paper Runner-up Award / Selected as one of the best-ranked papers of ICDM 2023 for fast-track journal invitation"
                        />
            <PublicationBlock name="NeuKron: Constant-Size Lossy Compression of Sparse Reorderable Matrices and Tensors" idx="[C9]"
                              authors="Taehyung Kwon*, Jihoon Ko*, Jinhong Jung, and Kijung Shin"
                              confname="WWW 2023" conflink="https://www2023.thewebconf.org/"
                              paper="https://arxiv.org/pdf/2302.04570.pdf"
                              details={{"appendix": "https://github.com/kbrother/NeuKron/blob/main/online_appendix.pdf",
                                        "video": "https://youtu.be/EMZYNneBaSo",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/neukronWWW2023.pdf",
                                        "code and datasets": "https://github.com/kbrother/neukron",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/www/KwonKJS23.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Characterization of Simplicial Complexes Using Simplets Beyond Four Nodes" idx="[C8]"
                              authors="Hyunju Kim, Jihoon Ko, Fanchen Bu, and Kijung Shin"
                              confname="WWW 2023" conflink="https://www2023.thewebconf.org/"
                              paper="https://arxiv.org/pdf/2302.05505.pdf"
                              details={{"appendix": "https://github.com/hhyy0401/SC3/blob/main/supplementary.pdf",
                                        "longer ver. [J8]": "http://dmlab.kaist.ac.kr/~kijungs/papers/simpletVLDBJ2025.pdf",
                                        "video": "https://youtu.be/xIP9lz-UtEI",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/simpletWWW2023.pdf",
                                        "code and datasets": "https://github.com/hhyy0401/SC3",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/www/KimKBS23.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Evaluation of Deep-Learning-Based Very Short-Term Rainfall Forecasts in South Korea" idx="[J3]"
                              authors="Seok-Geun Oh , Chanil Park, Seok-Woo Son, Jihoon Ko, Kijung Shin, Sunyoung Kim, and Junsang Park"
                              confname="Asia-Pacific Journal of Atmospheric Sciences" conflink="https://www.springer.com/journal/13143"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/evluationAPJAS2023.pdf"
                              details={{"bib": "http://dmlab.kaist.ac.kr/~kijungs/bib/evluationAPJAS2023.bib"}}
                              comments=""
                        />
            <PublicationBlock name="SLUGGER: Lossless Hierarchical Summarization of Massive Graphs" idx="[C7]"
                              authors="Kyuhan Lee*, Jihoon Ko*, and Kijung Shin"
                              confname="ICDE 2022" conflink="https://icde2022.ieeecomputer.my/"
                              paper="https://arxiv.org/pdf/2112.05374.pdf"
                              details={{"appendix": "https://github.com/KyuhanLee/slugger/blob/master/Supplemental%20Document.pdf",
                                        "video": "https://youtu.be/2o1OcVpPtw8",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/sluggerICDE2022.pdf",
                                        "code and datasets": "https://github.com/KyuhanLee/slugger",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/icde/LeeKS22.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Growth Patterns and Models of Real-world Hypergraphs" idx="[J2]"
                              authors="Jihoon Ko*, Yunbum Kook*, and Kijung Shin"
                              confname="Knowledge and Information Systems" conflink="https://www.springer.com/journal/10115"
                              paper="http://dmlab.kaist.ac.kr/~kijungs/papers/growthKAIS2022.pdf"
                              details={{"shorter ver. [C5]": "https://arxiv.org/pdf/2008.12729.pdf",
                                        "code and datasets": "https://github.com/jihoonko/HyperFF",
                                        "bib": "https://dblp.uni-trier.de/rec/journals/kais/KoKS22.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Effective Training Strategies for Deep-Learning-Based Precipitation Nowcasting and Estimation" idx="[J1]"
                              authors="Jihoon Ko*, Kyuhan Lee*, Hyunjin Hwang*, Seok-Geun Oh, Seok-Woo Son, and Kijung Shin"
                              confname="Computers and Geosciences" conflink="https://www.journals.elsevier.com/computers-and-geosciences"
                              paper="https://arxiv.org/pdf/2202.10555.pdf"
                              details={{"code": "https://github.com/jihoonko/DeepRaNE",
                                        "bib": "https://dblp.uni-trier.de/rec/journals/gandc/KoLHOSS22.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Deep-Learning-Based Precipitation Nowcasting with Ground Weather Station Data and Radar Data" idx="[W1]"
                              authors="Jihoon Ko*, Kyuhan Lee*, Hyunjin Hwang, and Kijung Shin"
                              confname="SSTDM 2022" conflink="https://stac-lab.github.io/sstdm22/"
                              paper="https://arxiv.org/pdf/2210.12853.pdf"
                              details={{"slides": "http://dmlab.kaist.ac.kr/~kijungs/asocSSTDM2022.pdf",
                                        "code and datasets": "https://github.com/jihoonko/ASOC",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/icdm/KoLHS22.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="MONSTOR: An Inductive Approach for Estimating and Maximizing Influence over Unseen Networks" idx="[C6]"
                              authors="Jihoon Ko, Kyuhan Lee, Kijung Shin, and Noseong Park"
                              confname="ASONAM 2020" conflink="http://asonam.cpsc.ucalgary.ca/2020/"
                              paper="https://arxiv.org/pdf/2001.08853.pdf"
                              details={{"slides": "http://dmlab.kaist.ac.kr/~kijungs/monstorASONAM2020.pdf",
                                        "code and datasets": "https://github.com/jihoonko/asonam20-monstor",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/asunam/KoLSP20.html?view=bibtex"}}
                              comments="Selected for fast-track journal invitation"
                        />
            <PublicationBlock name="Evolution of Real-world Hypergraphs: Patterns and Models without Oracles" idx="[C5]"
                              authors="Yunbum Kook, Jihoon Ko, and Kijung Shin"
                              confname="ICDM 2020" conflink="http://icdm2020.bigke.org/"
                              paper="https://arxiv.org/pdf/2008.12729.pdf"
                              details={{"longer ver. [J2]": "http://dmlab.kaist.ac.kr/~kijungs/growthKAIS2022.pdf",
                                        "video": "https://www.youtube.com/watch?v=lCBlOAK0nlw",
                                        "slides": "http://dmlab.kaist.ac.kr/~kijungs/evolutionICDM2020.pdf",
                                        "code and datasets": "https://github.com/yunbum-kook/icdm20-hyperff",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/icdm/KookKS20.html?view=bibtex"}}
                              comments="Selected as one of the best-ranked papers of ICDM 2020 for fast-track journal invitation"
                        />
            <PublicationBlock name="Hypergraph Motifs: Concepts, Algorithms, and Discoveries" idx="[C4]"
                              authors="Geon Lee, Jihoon Ko, and Kijung Shin"
                              confname="VLDB 2020" conflink="https://vldb2020.org/"
                              paper="https://arxiv.org/pdf/2003.01853.pdf"
                              details={{"appendix": "https://github.com/geonlee0325/MoCHy/blob/master/supplementary.pdf",
                                        "longer ver. [J4]": "https://arxiv.org/pdf/2310.15668.pdf",
                                        "video": "https://youtu.be/HYHkEwojfBQ",
                                        "slides": "https://www.slideshare.net/GeonLee9/hmotif-vldb2020-slide",
                                        "code and datasets": "http://dmlab.kaist.ac.kr/hmotif/",
                                        "bib": "https://dblp.uni-trier.de/rec/journals/pvldb/LeeKS20.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="Incremental Lossless Graph Summarization" idx="[C3]"
                              authors="Jihoon Ko*, Yunbum Kook*, and Kijung Shin"
                              confname="KDD 2020" conflink="https://www.kdd.org/kdd2020/"
                              paper="https://arxiv.org/pdf/2006.09935.pdf"
                              details={{"video (short)": "https://youtu.be/uq5vVPBopU8",
                                        "video (long)": "https://youtu.be/FHVx642GoaI",
                                        "slides": "https://www.slideshare.net/ssuserd6bbc0/incremental-lossless-graph-summarization-kdd-2020",
                                        "code and datasets": "http://dmlab.kaist.ac.kr/mosso",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/kdd/KoKS20.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="SSumM: Sparse Summarization of Massive Graphs" idx="[C2]"
                              authors="Kyuhan Lee*, Hyeonsoo Jo*, Jihoon Ko, Sungsu Lim, and Kijung Shin"
                              confname="KDD 2020" conflink="https://www.kdd.org/kdd2020/"
                              paper="https://arxiv.org/pdf/2006.01060.pdf"
                              details={{"video (short)": "https://youtu.be/wI_dk0OYKxw",
                                        "video (long)": "https://youtu.be/Wqs8LxezAlA",
                                        "slides": "https://www.slideshare.net/KyuhanLee4/ssumm-sparse-summarization-of-massive-graphs-kdd-2020",
                                        "code and datasets": "http://dmlab.kaist.ac.kr/ssumm",
                                        "bib": "https://dblp.uni-trier.de/rec/conf/kdd/LeeJKLS20.html?view=bibtex"}}
                              comments=""
                        />
            <PublicationBlock name="X-Droid: A Quick and Easy Android Prototyping Framework with a Single-App Illusion" idx="[C1]"
                              authors="Donghwi Kim, Sooyoung Park, Jihoon Ko, Steven Y. Ko, and Sung-Ju Lee"
                              confname="UIST 2019"
                              paper="https://nmsl.kaist.ac.kr/pdf/UIST19_X-Droid.pdf"
                              details={{"website": "https://nmsl.kaist.ac.kr/projects/xdroid",
                                      "video (short)": "https://youtu.be/pOg4JJVLMIQ",
                                      "video (long)": "https://youtu.be/5pF5kGq-lDU",
                                      "bib": undefined}}
            />      
        </div>);
    }
}

export class Awards extends Component {
    render() {
        return (
        <div ref={this.props.innerRef}>
            <Title name="Awards &amp; Honors" icon="trophy"/>
            <AwardBlock name="IEEE ICDM Best Student Paper Runner-up Award"
                            details={["IEEE ICDM, 2023"]}               
            />
            <AwardBlock name="Best-Ranked Papers of IEEE ICDM"
                            details={["IEEE ICDM, 2020, 2023, 2024"]}               
            />

            <AwardBlock name="Korea Foundation for Advanced Studies (KFAS) Scholarship"
                            details={["KFAS, Sep. 2020 - Feb. 2025"]}               
            />
            
            <ICPCBlock name="International Collegiate Programming Contest (ICPC)"
                            details={["39th Place in ICPC World Finals 2020 Invitational (Online Contest)",
                                      "9th Place (Bronze Medal) in ACM-ICPC World Finals 2017, Rapid City, USA",
                                      "3rd Place in ICPC Seoul Regional 2019",
                                      "4th Place in ICPC Jakarta Regional 2018",
                                      "5th Place in ICPC Seoul Regional 2018",
                                      "2nd Place in ACM-ICPC Daejeon Regional 2016",
                                      "14th Place in ACM-ICPC Daejeon Regional 2015"
                                    ]}                      
            />
            <AwardBlock name="Summa Cum Laude Graduation Honors"
                            details={["KAIST, Sep. 2019"]}               
            />
            <AwardBlock name="Dean's List"
                            details={["Top 3% in KAIST School of Computing, Spring 2017"]}               
            />
            <AwardBlock name="KAIST Presidential Fellowship (KPF)"
                            details={["Fellowship designed to support top 3% students, Mar. 2015 - Sep. 2019"]}               
            />
            <AwardBlock name="The Presidential Science Scholarship"
                            details={["Korea Student Aid Foundation, Mar. 2015 - Sep. 2019"]}               
            />
        </div>);
    }
}

export class Works extends Component {
    render() {
        return (
        <div ref={this.props.innerRef}>
            <Title name="Work Experiences" icon="briefcase"/>
            <AwardBlock name="Intern @ Kakao Corporation"
                            details={["Internship in Advanced Recommendation Technology team, Dec 2017 - May 2018",
                                      "Topic: Improving article recommendation algorithm in Brunch",
                                      ]}                      
            />
        </div>);
    }
}

export class Teaching extends Component {
    render() {
        return (
        <div ref={this.props.innerRef}>
            <Title name="Teaching" icon="pencil"/>
            <TeachingBlock name="KAIST AI506 Data Mining and Search"
                           role="Teaching Assistant"
                           lectures={{'Spring 2020': 'https://sites.google.com/view/ai506-2020spring/home',
                                      'Spring 2021': 'https://sites.google.com/view/ai506-2021spring/home',
                                      'Spring 2022': 'https://sites.google.com/view/ai506-2022spring/home',
                                      'Spring 2023': 'https://sites.google.com/view/ai506-2023spring/home'
                           }}                      
            />
            <TeachingBlock name="KAIST AI607 Graph Mining and Social Network Analysis"
                           role="Teaching Assistant"
                           lectures={{'Fall 2019': 'https://sites.google.com/view/ai607-2019fall/home',
                                      'Fall 2021': 'https://sites.google.com/view/ai607-2021fall/home',
                                      'Fall 2022': 'https://sites.google.com/view/ai607-2022fall/home',
                           }}                      
            />
            <TeachingBlock name="KAIST AI701 Bayesian Machine Learning"
                           role="Teaching Assistant"
                           lectures={{'Fall 2020': undefined}}                      
            />
            <TeachingBlock name="KAIST CS500 Design and Analysis of Algorithm"
                           role="Teaching Assistant"
                           lectures={{'Spring 2019': 'https://github.com/kaist-cp/cs500'}}                      
            />
            <TeachingBlock name="KAIST CS202 Problem Solving"
                           role="Teaching Assistant"
                           lectures={{'Fall 2016': undefined,
                                      'Spring 2017': undefined,
                                      'Fall 2017': undefined,
                                      'Fall 2018': undefined
                                    }}                      
            />
            
        </div>);
    }
}
