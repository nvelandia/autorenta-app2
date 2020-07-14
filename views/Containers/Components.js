import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../Components/Molecules/Header/Header.js";
import HeaderLinks from "../Components/Molecules/Header/HeaderLinks.js";
import Footer from "../Components/Molecules/Footer/Footer.js";
import GridContainer from "../Components/Atoms/Grid/GridContainer.js";
import GridItem from "../Components/Atoms/Grid/GridItem.js";
import Button from "../Components/Atoms/CustomButtons/Button.js";
import Parallax from "../Components/Atoms/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "../Components/Organism/Components-Sections/SectionBasics.js";
import SectionNavbars from "../Components/Organism/Components-Sections/SectionNavbars.js";
import SectionTabs from "../Components/Organism/Components-Sections/SectionTabs.js";
import SectionPills from "../Components/Organism/Components-Sections/SectionPills.js";
import SectionNotifications from "../Components/Organism/Components-Sections/SectionNotifications.js";
import SectionTypography from "../Components/Organism/Components-Sections/SectionTypography.js";
import SectionJavascript from "../Components/Organism/Components-Sections/SectionJavascript.js";
import SectionCarousel from "../Components/Organism/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "../Components/Organism/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "../Components/Organism/Components-Sections/SectionLogin.js";
import SectionExamples from "../Components/Organism/Components-Sections/SectionExamples.js";
import SectionDownload from "../Components/Organism/Components-Sections/SectionDownload.js";

import styles from "../../styles/losNonosStyles/containers/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("public/img/nextjs_header.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>NextJS Material Kit.</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material Kit based on Material-UI and NextJS.
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionBasics />
                <SectionNavbars />
                <SectionTabs />
                <SectionPills />
                <SectionNotifications />
                <SectionTypography />
                <SectionJavascript />
                <SectionCarousel />
                <SectionCompletedExamples />
                <SectionLogin />
                <GridItem md={12} className={classes.textCenter}>
                    <Link href="/login">
                        <a className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                View Login Page
                            </Button>
                        </a>
                    </Link>
                </GridItem>
                <SectionExamples />
                <SectionDownload />
            </div>
            <Footer />
        </div>
    );
}
