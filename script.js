// ===== OPEN MALI - JAVASCRIPT & FULL BILINGUAL TRANSLATION SYSTEM =====

// ===== TRANSLATION DICTIONARY (FR <-> EN) =====
const TRANSLATIONS = {
  fr: {
    // Navigation
    "nav_home": "Accueil",
    "nav_about": "Qui sommes-nous",
    "nav_domains": "Nos Domaines",
    "nav_news": "Actualités",
    "nav_projects": "Projets",
    "nav_transparency": "Transparence",
    "nav_contact": "Contact",
    "nav_donate": "💚 Faire un don",

    // Hero
    "hero_badge": "ONG au Mali depuis 2002",
    "hero_slogan_oui": "Oui",
    "hero_title_for": " pour une",
    "hero_title_highlight": "Enfance Noble",
    "hero_subtitle": "OPEN MALI est la première association humanitaire de jeunes du Mali. Depuis 2002, nous œuvrons pour l'éducation, la santé et les droits humains.",
    "hero_btn_donate": "Faire un don",
    "hero_btn_sponsor": "Parrainer un enfant",
    "hero_btn_discover": "Découvrir notre mission",
    "hero_scroll": "Défiler",
    "hero_stat_children": "Enfants scolarisés",
    "hero_stat_cow": "Bénéficiaires COW",
    "hero_stat_years": "Années d'action",
    "hero_stat_regions": "Régions couvertes",

    // About
    "about_label": "Qui sommes-nous",
    "about_title": "La première association humanitaire de jeunes au Mali",
    "about_p1": "L'association <strong>« Oui, Pour une Enfance Noble Mali »</strong>, en abrégé <strong>OPEN Mali</strong>, est la première association humanitaire de jeunes au Mali, fondée en <strong>2002 à Bamako</strong> par six jeunes lycéens de 15 à 16 ans. C'est une association à but non lucratif, humanitaire, apolitique et laïque disposant d'un récépissé délivré par le <em>Ministère de l'Administration Territoriale et des Collectivités Locales</em>.",
    "about_p2": "Elle a été érigée en <strong>ONG</strong> par la signature de l'accord-cadre du <strong>25 juin 2019</strong> avec le Gouvernement de la République du Mali, puis modifié par l'avenant du <strong>13 février 2026</strong>. OPEN Mali est présente sur l'ensemble du territoire Malien.",
    "about_p3": "OPEN Mali a siégé à l'<strong>Équipe Humanitaire Pays (EHP)</strong> en sa qualité d'association représentante des jeunes, déléguée par la plateforme des ONG Nationales actives dans l'humanitaire <strong>(PONAH)</strong>. Elle est membre de plusieurs <em>Clusters</em>.",
    "about_mission_title": "Notre Mission",
    "about_mission_desc": "La mission de l'association/ONG OPEN Mali est de venir en aide aux personnes en situation difficile touchées par la pauvreté, les violences, les conflits, les catastrophes naturelles et climatiques. Elle apporte son assistance aux personnes qui en ont besoin en les aidant à accéder à leurs droits les plus élémentaires et à construire un avenir durable.",
    "about_commitment_title": "Notre Présence & Engagement",
    "about_commitment_desc": "L’association OPEN Mali est présente sur l’ensemble du territoire Malien. OPEN Mali a siégé à l’Equipe Humanitaire Pays (EHP) en sa qualité d’association représentante des jeunes, déléguée par la plateforme des ONG Nationales actives dans l’humanitaire (PONAH). Elle est membre de plusieurs Clusters.",
    "about_values_title": "Nos Valeurs",
    "about_values_desc": "Humanitaire, apolitique, laïque — intégrité, solidarité et engagement citoyen",
    "about_btn_projects": "Voir nos réalisations →",
    "about_tagline": "Oui, Pour une Enfance Noble",
    "about_t1": "Fondation par 6 lycéens à Bamako",
    "about_t2": "Lancement du parrainage scolaire",
    "about_t3": "Projet Children Of the World (COW)",
    "about_t4": "Accord-cadre ONG avec le Gouvernement",
    "about_t5": "Statut consultatif ONU — EHP & PONAH",
    "about_t6": "Avenant accord-cadre — 24 ans d'impact",
    "about_card_mini_title": "Présence nationale & internationale",
    "about_card_mini_desc": "Territoire malien entier · EHP · PONAH · Clusters",

    // Domains
    "domains_label": "Nos Domaines d'Intervention",
    "domains_title": "6 piliers pour transformer des vies",
    "domains_subtitle": "De l'éducation à l'autonomisation des femmes, OPEN MALI intervient là où les besoins sont les plus criants.",
    "domain_edu_title": "Éducation",
    "domain_edu_desc": "Scolarisation et parrainage d'enfants vulnérables. Plus de 3 500 enfants accompagnés vers l'école.",
    "domain_edu_stat": "3 500+ enfants scolarisés",
    "domain_health_title": "Santé",
    "domain_health_desc": "Campagnes de prévention, lutte contre le paludisme et accès aux soins pour les communautés rurales.",
    "domain_health_stat": "Lutte anti-paludisme",
    "domain_cit_title": "Citoyenneté",
    "domain_cit_desc": "Formation civique, participation des jeunes à la vie publique et promotion de la démocratie participative.",
    "domain_cit_stat": "Jeunes engagés",
    "domain_urg_title": "Aide d'urgence",
    "domain_urg_desc": "Réponse rapide aux crises humanitaires, distribution d'aide alimentaire et assistance aux déplacés.",
    "domain_urg_stat": "Réponse aux crises",
    "domain_rights_title": "Droits Humains & Culture",
    "domain_rights_desc": "Défense des droits fondamentaux, lutte contre les violences basées sur le genre (VBG) et promotion culturelle.",
    "domain_rights_stat": "Défense des droits",
    "domain_women_title": "Autonomisation des Femmes",
    "domain_women_desc": "Renforcement des capacités économiques, formation professionnelle et leadership féminin au Mali.",
    "domain_women_stat": "PAFFIPE & SARE",
    "domain_learn_more": "En savoir plus →",

    // News
    "news_label": "Actualités & Médias",
    "news_title": "Dernières nouvelles d'OPEN MALI",
    "news_filter_all": "Tous",
    "news_filter_edu": "Éducation",
    "news_filter_health": "Santé",
    "news_filter_women": "Femmes",
    "news_filter_urg": "Urgence",
    "news_1_tag": "Éducation",
    "news_1_date": "15 juillet 2026",
    "news_1_title": "Rentrée scolaire 2026 : 450 nouveaux filleuls intégrés dans le programme",
    "news_1_desc": "OPEN MALI célèbre une rentrée record avec 450 nouveaux enfants intégrés dans son programme de parrainage scolaire, grâce à la générosité de ses donateurs.",
    "news_2_tag": "Santé",
    "news_2_date": "3 juin 2026",
    "news_2_title": "Campagne anti-paludisme : 2 000 moustiquaires distribuées dans la région de Mopti",
    "news_2_desc": "En partenariat avec le ministère de la Santé, OPEN MALI a distribué 2 000 moustiquaires imprégnées dans les villages les plus touchés par le paludisme.",
    "news_3_tag": "Femmes",
    "news_3_date": "20 mai 2026",
    "news_3_title": "PAFFIPE : 120 femmes obtiennent leur certification en entrepreneuriat",
    "news_3_desc": "Une cérémonie de remise de diplômes s'est tenue à Bamako pour célébrer 120 femmes ayant terminé avec succès la formation PAFFIPE en entrepreneuriat rural.",
    "news_read_more": "Lire la suite →",
    "news_btn_all": "Voir toutes les actualités →",

    // Impact
    "impact_label": "Notre Impact",
    "impact_title": "24 ans de transformations mesurables",
    "impact_1_label": "Enfants scolarisés",
    "impact_1_desc": "via le programme de parrainage scolaire",
    "impact_2_label": "Bénéficiaires COW",
    "impact_2_desc": "Children Of the World",
    "impact_3_label": "Années d'action",
    "impact_3_desc": "au service des Maliens",
    "impact_4_label": "Régions couvertes",
    "impact_4_desc": "sur tout le territoire national",
    "impact_5_label": "Programmes actifs",
    "impact_5_desc": "en cours de déploiement",
    "impact_6_label": "Partenaires intl.",
    "impact_6_desc": "Diakonia, FCIL Canada, ONU",

    // Donation
    "don_label": "Faire un don",
    "don_title": "Votre générosité change des vies",
    "don_desc": "Chaque don, petit ou grand, permet à OPEN MALI de continuer ses actions sur le terrain. Soutenez l'éducation, la santé et l'autonomisation des populations maliennes.",
    "don_use_1": "<strong>25 000 FCFA</strong> – Parrainez un enfant pendant un an",
    "don_use_2": "<strong>10 000 FCFA</strong> – Moustiquaire pour une famille",
    "don_use_3": "<strong>5 000 FCFA</strong> – Kit scolaire complet",
    "don_payment_title": "Modes de paiement disponibles",
    "don_pay_orange": "📱 Orange Money : +223 77 12 13 14",
    "don_pay_moov": "📱 Moov Money : +223 77 12 13 14",
    "don_pay_card": "💳 Carte Bancaire / Virement",
    "don_form_title": "Choisissez votre don",
    "don_amount_label": "Montant (FCFA)",
    "don_custom_placeholder": "Autre montant...",
    "don_freq_label": "Fréquence",
    "don_freq_once": "Ponctuel",
    "don_freq_monthly": "Mensuel",
    "don_project_label": "Projet à soutenir",
    "don_opt_general": "Don général – Là où le besoin est le plus urgent",
    "don_opt_sponsor": "Programme de parrainage scolaire",
    "don_opt_health": "Santé – Lutte anti-paludisme",
    "don_opt_women": "Autonomisation des femmes",
    "don_opt_urg": "Aide d'urgence",
    "don_btn_text": "💚 Je fais un don de",
    "don_btn_currency": "FCFA",
    "don_security": "🔒 Paiement 100% sécurisé · Reçu par e-mail",

    // Child Sponsorship (Parrainage)
    "spons_label": "Parrainage d'enfants",
    "spons_title": "Offrez un avenir à un enfant",
    "spons_subtitle": "Pour seulement 25 000 FCFA par an, vous permettez à un enfant vulnérable de rester à l'école et de construire son avenir.",
    "spons_how_title": "Comment ça fonctionne ?",
    "spons_step1_title": "Choisissez votre région",
    "spons_step1_desc": "Sélectionnez la zone géographique où vous souhaitez avoir un impact",
    "spons_step2_title": "Remplissez le formulaire",
    "spons_step2_desc": "Vos coordonnées et préférences en quelques minutes",
    "spons_step3_title": "Recevez le profil de votre filleul",
    "spons_step3_desc": "OPEN MALI vous met en relation avec un enfant identifié",
    "spons_step4_title": "Suivez son parcours",
    "spons_step4_desc": "Rapports réguliers sur les progrès scolaires de l'enfant parrainé",
    "spons_form_title": "Demande de parrainage",
    "spons_lbl_fname": "Prénom *",
    "spons_ph_fname": "Votre prénom",
    "spons_lbl_lname": "Nom *",
    "spons_ph_lname": "Votre nom",
    "spons_lbl_email": "E-mail *",
    "spons_ph_email": "votre@email.com",
    "spons_lbl_phone": "Téléphone",
    "spons_ph_phone": "+223...",
    "spons_lbl_region": "Région préférée",
    "spons_opt_all_regions": "Toute région",
    "spons_btn_submit": "🤝 Envoyer ma demande",
    "spons_note": "Un responsable OPEN MALI vous contactera sous 48h",

    // Volunteer (Bénévolat)
    "vol_label": "Bénévolat & Adhésion",
    "vol_title": "Rejoignez l'équipe OPEN MALI",
    "vol_desc": "Votre temps et vos compétences sont précieux. Rejoignez nos équipes sur le terrain ou en ligne et contribuez à notre mission humanitaire.",
    "vol_m1": "🏫 Animation éducative dans les écoles",
    "vol_m2": "🏥 Sensibilisation santé communautaire",
    "vol_m3": "💻 Appui digital et communication",
    "vol_m4": "📊 Suivi et évaluation de projets",
    "vol_m5": "🤝 Mobilisation de ressources et partenariats",
    "vol_form_title": "Candidature bénévole",
    "vol_lbl_fname": "Prénom *",
    "vol_ph_fname": "Prénom",
    "vol_lbl_lname": "Nom *",
    "vol_ph_lname": "Nom",
    "vol_lbl_email": "E-mail *",
    "vol_ph_email": "votre@email.com",
    "vol_lbl_domain": "Domaine de compétence *",
    "vol_opt_choose": "Choisir un domaine",
    "vol_opt_edu": "Éducation / Enseignement",
    "vol_opt_health": "Santé / Médecine",
    "vol_opt_comm": "Communication / Digital",
    "vol_opt_law": "Droit / Juridique",
    "vol_opt_fin": "Finance / Comptabilité",
    "vol_opt_log": "Logistique / Terrain",
    "vol_opt_other": "Autre",
    "vol_lbl_motiv": "Motivations *",
    "vol_ph_motiv": "Pourquoi souhaitez-vous rejoindre OPEN MALI ?",
    "vol_lbl_avail": "Disponibilités",
    "vol_ph_avail": "Ex: Weekends, temps partiel...",
    "vol_lbl_cv": "CV (optionnel)",
    "vol_btn_submit": "🚀 Envoyer ma candidature",

    // Projects
    "proj_label": "Nos Projets",
    "proj_title": "Des réalisations concrètes sur le terrain",
    "proj_subtitle": "Chaque projet est une transformation réelle dans la vie de milliers de Maliens.",
    "proj_flagship": "Programme phare",
    "proj_1_title": "Parrainage Scolaire",
    "proj_1_desc": "Programme de parrainage d'enfants vulnérables à 25 000 FCFA/enfant/an. Il couvre plusieurs régions du Mali avec un suivi individualisé de chaque enfant.",
    "proj_1_meta1": "📍 National",
    "proj_1_meta2": "👶 3 500+ enfants",
    "proj_1_prog_lbl": "Impact",
    "proj_2_title": "Children Of the World (COW)",
    "proj_2_desc": "Programme d'envergure internationale bénéficiant à des milliers d'enfants maliens, en partenariat avec des organisations mondiales.",
    "proj_2_meta1": "📍 Plusieurs régions",
    "proj_2_meta2": "👨‍👩‍👧‍👦 18 778 bénéficiaires",
    "proj_3_title": "PAFFIPE",
    "proj_3_desc": "Programme d'autonomisation financière et de formation professionnelle pour les femmes et jeunes filles dans les zones rurales.",
    "proj_3_meta1": "📍 Zones rurales",
    "proj_3_meta2": "♀️ Femmes & jeunes",
    "proj_4_title": "DAMBE",
    "proj_4_desc": "Initiative de renforcement des capacités et de développement communautaire au service des populations les plus vulnérables.",
    "proj_4_meta1": "📍 Communautés locales",
    "proj_4_meta2": "🏘️ Développement",
    "proj_5_title": "SARE",
    "proj_5_desc": "Projet d'accès à l'eau, à l'assainissement et aux ressources essentielles pour les communautés rurales défavorisées.",
    "proj_5_meta1": "📍 Rural",
    "proj_5_meta2": "🚰 Eau & Santé",
    "proj_6_title": "Lutte Anti-Paludisme",
    "proj_6_desc": "Distribution de moustiquaires imprégnées, sensibilisation et traitement préventif pour réduire la mortalité infantile due au paludisme.",
    "proj_6_meta1": "📍 Zones endémiques",
    "proj_6_meta2": "🏥 Santé publique",

    // Transparency
    "transp_label": "Transparence",
    "transp_title": "Une ONG ouverte et responsable",
    "transp_subtitle": "Nous croyons en la transparence totale vis-à-vis de nos donateurs, partenaires et bénéficiaires.",
    "transp_annual_title": "Rapports annuels",
    "transp_doc_2025_title": "Rapport annuel 2025",
    "transp_doc_2025_desc": "Activités, résultats et perspectives",
    "transp_doc_2024_title": "Rapport annuel 2024",
    "transp_doc_2024_desc": "Bilan des activités",
    "transp_fin_title": "Rapports financiers",
    "transp_fin_2025_title": "Budget 2025 – Exécution",
    "transp_fin_2025_desc": "Rapport financier certifié",
    "transp_fin_2024_title": "Audit externe 2024",
    "transp_fin_2024_desc": "Rapport d'audit indépendant",
    "transp_gov_title": "Gouvernance",
    "transp_gov_pres": "Président",
    "transp_gov_board": "Bureau Exécutif OPEN MALI",
    "transp_gov_sec": "Secrétaire Général",
    "transp_gov_tres": "Trésorier",
    "transp_gov_note": "* Organigramme complet disponible sur demande",
    "transp_part_title": "Nos Partenaires & Bailleurs",
    "transp_part_un": "🌐 Nations Unies (ECOSOC)",
    "transp_part_diakonia": "🇸🇪 Diakonia",
    "transp_part_fcil": "🇨🇦 FCIL Canada",
    "transp_part_gov": "🇲🇱 Ministère de l'Action Humanitaire",
    "transp_part_local": "🤝 Partenaires locaux",

    // Testimonials
    "testim_label": "Témoignages",
    "testim_title": "Ils témoignent de l'impact d'OPEN MALI",
    "testim_1_quote": "« Grâce au parrainage d'OPEN MALI, j'ai pu terminer mon école primaire et maintenant je suis au lycée. Je veux devenir médecin pour soigner ma communauté. »",
    "testim_1_author": "Aminata, 15 ans",
    "testim_1_role": "Filleule du programme de parrainage, Ségou",
    "testim_2_quote": "« OPEN MALI nous a donné bien plus que de l'aide matérielle. Ils nous ont donné confiance en nous et les outils pour être autonomes. Notre coopérative emploie maintenant 25 femmes. »",
    "testim_2_author": "Fatoumata Coulibaly",
    "testim_2_role": "Bénéficiaire du programme PAFFIPE, Sikasso",
    "testim_3_quote": "« Je parraine un enfant depuis 3 ans, depuis le Canada. Les rapports réguliers d'OPEN MALI me permettent de suivre ses progrès. Une expérience humaine extraordinaire. »",
    "testim_3_author": "Mohamed Traoré",
    "testim_3_role": "Parrain, membre de la diaspora malienne à Montréal",

    // Contact
    "contact_label": "Contact",
    "contact_title": "Contactez OPEN MALI",
    "contact_subtitle": "Une question, un partenariat, un projet ? Notre équipe vous répond dans les plus brefs délais.",
    "contact_hq_title": "Siège social",
    "contact_hq_desc": "Bamako, République du Mali",
    "contact_phone_title": "Téléphone",
    "contact_email_title": "E-mail",
    "contact_web_title": "Site web",
    "contact_maps_link": "📍 Voir sur Google Maps",
    "contact_lbl_fname": "Prénom *",
    "contact_ph_fname": "Votre prénom",
    "contact_lbl_lname": "Nom *",
    "contact_ph_lname": "Votre nom",
    "contact_lbl_email": "E-mail *",
    "contact_ph_email": "votre@email.com",
    "contact_lbl_subject": "Motif du contact *",
    "contact_opt_choose": "Choisir un motif",
    "contact_opt_part": "Partenariat",
    "contact_opt_don": "Don / Financement",
    "contact_opt_press": "Presse / Média",
    "contact_opt_vol": "Bénévolat",
    "contact_opt_spons": "Parrainage",
    "contact_opt_other": "Autre",
    "contact_lbl_msg": "Message *",
    "contact_ph_msg": "Votre message...",
    "contact_captcha_lbl": "Je ne suis pas un robot",
    "contact_btn_submit": "📧 Envoyer le message",

    // Newsletter
    "newslet_title": "Restez informés de nos actions",
    "newslet_desc": "Recevez nos actualités, rapports et appels à mobilisation directement dans votre boîte mail.",
    "newslet_placeholder": "Votre adresse e-mail",
    "newslet_btn": "S'inscrire →",

    // Footer
    "footer_tagline": "« Oui, Pour une Enfance Noble »",
    "footer_desc": "Première ONG humanitaire de jeunes du Mali, fondée en 2002. Nous œuvrons pour l'éducation, la santé et la dignité des populations maliennes.",
    "footer_group_org": "L'organisation",
    "footer_link_about": "Qui sommes-nous",
    "footer_link_history": "Notre histoire",
    "footer_link_gov": "Gouvernance",
    "footer_link_partners": "Nos partenaires",
    "footer_link_transp": "Transparence",
    "footer_group_act": "Agir",
    "footer_link_donate": "Faire un don",
    "footer_link_sponsor": "Parrainer un enfant",
    "footer_link_vol": "Devenir bénévole",
    "footer_link_join": "Adhérer à l'ONG",
    "footer_link_part": "Partenariat",
    "footer_group_prog": "Nos programmes",
    "footer_link_p_spons": "Parrainage scolaire",
    "footer_link_p_cow": "Children of the World",
    "footer_link_p_paffipe": "PAFFIPE",
    "footer_link_p_dambe": "DAMBE",
    "footer_link_p_sare": "SARE",
    "footer_copy": "© 2026 OPEN MALI – Oui, Pour une Enfance Noble. Tous droits réservés.",
    "footer_legal": "Mentions légales",
    "footer_privacy": "Politique de confidentialité",
    "footer_sitemap": "Plan du site",

    // Modals
    "modal_don_title": "Finaliser votre don",
    "modal_don_p1_pre": "Votre don de ",
    "modal_don_p1_post": " FCFA va changer des vies au Mali.",
    "modal_don_num_title": "Numéro officiel de don & transfert :",
    "modal_don_num_holder": "Bénéficiaire : <strong>OPEN MALI (ONG)</strong>",
    "modal_don_btn_copy": "Copier le numéro",
    "modal_don_btn_copied": "Copié !",
    "modal_don_btn_call": "Appeler",
    "modal_don_btn_wa": "WhatsApp",
    "modal_don_instructions_title": "Instructions de transfert :",
    "modal_don_step1": "Transférez le montant au <strong>+223 77 12 13 14</strong> via <strong>Orange Money</strong> ou <strong>Moov Money</strong>.",
    "modal_don_step2": "Mentionnez votre nom ou votre projet en motif.",
    "modal_don_step3": "Cliquez sur WhatsApp ou contactez-nous au <strong>+223 77 12 13 14</strong> pour confirmer et recevoir votre reçu.",
    "modal_don_p2": "Notre équipe reste à votre disposition au +223 77 12 13 14 pour vous assister.",
    "modal_don_share": "Partagez votre geste :",
    "modal_btn_close": "Fermer",
    "modal_succ_title": "Message envoyé !",
    "modal_succ_msg": "Notre équipe vous répondra dans les plus brefs délais."
  },

  en: {
    // Navigation
    "nav_home": "Home",
    "nav_about": "About Us",
    "nav_domains": "Our Areas",
    "nav_news": "News",
    "nav_projects": "Projects",
    "nav_transparency": "Transparency",
    "nav_contact": "Contact",
    "nav_donate": "💚 Donate",

    // Hero
    "hero_badge": "NGO in Mali since 2002",
    "hero_slogan_oui": "Yes",
    "hero_title_for": " for a",
    "hero_title_highlight": "Noble Childhood",
    "hero_subtitle": "OPEN MALI is Mali's first youth humanitarian organization. Since 2002, we work for education, health, and human rights.",
    "hero_btn_donate": "Donate",
    "hero_btn_sponsor": "Sponsor a child",
    "hero_btn_discover": "Discover our mission",
    "hero_scroll": "Scroll",
    "hero_stat_children": "Children in school",
    "hero_stat_cow": "COW Beneficiaries",
    "hero_stat_years": "Years of action",
    "hero_stat_regions": "Regions covered",

    // About
    "about_label": "About Us",
    "about_title": "The First Youth Humanitarian Organization in Mali",
    "about_p1": "The association <strong>« Oui, Pour une Enfance Noble Mali »</strong>, abbreviated as <strong>OPEN Mali</strong>, is the first youth humanitarian organization in Mali, founded in <strong>2002 in Bamako</strong> by six high school students aged 15 to 16. It is a non-profit, humanitarian, apolitical, and secular association holding official registration issued by the <em>Ministry of Territorial Administration and Local Authorities</em>.",
    "about_p2": "It was established as an <strong>NGO</strong> through the framework agreement signed on <strong>June 25, 2019</strong> with the Government of the Republic of Mali, subsequently updated by the amendment of <strong>February 13, 2026</strong>. OPEN Mali is active across the entire Malian territory.",
    "about_p3": "OPEN Mali sat on the <strong>Humanitarian Country Team (HCT / EHP)</strong> representing youth, delegated by the Platform of National NGOs Active in Humanitarian Affairs <strong>(PONAH)</strong>. It is a member of multiple <em>Clusters</em>.",
    "about_mission_title": "Our Mission",
    "about_mission_desc": "The mission of the association/NGO OPEN Mali is to assist people in difficult situations affected by poverty, violence, conflicts, natural, and climate disasters. It provides assistance to those in need by helping them access their most fundamental rights and build a sustainable future.",
    "about_commitment_title": "Our Presence & Commitment",
    "about_commitment_desc": "The OPEN Mali association operates across the entire Malian territory. OPEN Mali has served on the Humanitarian Country Team (HCT / EHP) as a youth representative association, delegated by the Platform of National NGOs Active in Humanitarian Affairs (PONAH). It is a member of multiple Clusters.",
    "about_values_title": "Our Values",
    "about_values_desc": "Humanitarian, apolitical, secular — integrity, solidarity, and civic commitment",
    "about_btn_projects": "See our achievements →",
    "about_tagline": "Yes, For a Noble Childhood",
    "about_t1": "Founded by 6 high school students in Bamako",
    "about_t2": "Launch of school sponsorship program",
    "about_t3": "Children Of the World (COW) project",
    "about_t4": "Official NGO Framework Agreement with Government",
    "about_t5": "UN Consultative Status — HCT & PONAH",
    "about_t6": "Framework Amendment — 24 years of impact",
    "about_card_mini_title": "National & International Presence",
    "about_card_mini_desc": "Entire Malian territory · HCT · PONAH · Clusters",

    // Domains
    "domains_label": "Our Areas of Action",
    "domains_title": "6 Pillars to Transform Lives",
    "domains_subtitle": "From education to women's empowerment, OPEN MALI intervenes where needs are most critical.",
    "domain_edu_title": "Education",
    "domain_edu_desc": "Schooling and sponsorship of vulnerable children. Over 3,500 children supported on their educational journey.",
    "domain_edu_stat": "3,500+ children in school",
    "domain_health_title": "Health",
    "domain_health_desc": "Prevention campaigns, malaria control, and healthcare access for rural communities.",
    "domain_health_stat": "Malaria prevention",
    "domain_cit_title": "Citizenship",
    "domain_cit_desc": "Civic education, youth civic participation, and promotion of participatory democracy.",
    "domain_cit_stat": "Engaged youth",
    "domain_urg_title": "Emergency Relief",
    "domain_urg_desc": "Rapid response to humanitarian crises, food distribution, and assistance to displaced populations.",
    "domain_urg_stat": "Crisis response",
    "domain_rights_title": "Human Rights & Culture",
    "domain_rights_desc": "Defending fundamental rights, combating gender-based violence (GBV), and promoting culture.",
    "domain_rights_stat": "Human rights defense",
    "domain_women_title": "Women's Empowerment",
    "domain_women_desc": "Strengthening economic capacity, vocational training, and female leadership in Mali.",
    "domain_women_stat": "PAFFIPE & SARE",
    "domain_learn_more": "Learn more →",

    // News
    "news_label": "News & Media",
    "news_title": "Latest News from OPEN MALI",
    "news_filter_all": "All",
    "news_filter_edu": "Education",
    "news_filter_health": "Health",
    "news_filter_women": "Women",
    "news_filter_urg": "Emergency",
    "news_1_tag": "Education",
    "news_1_date": "July 15, 2026",
    "news_1_title": "Back to School 2026: 450 new sponsored children join the program",
    "news_1_desc": "OPEN MALI celebrates a record school start with 450 new children enrolled in its school sponsorship program, thanks to generous donors.",
    "news_2_tag": "Health",
    "news_2_date": "June 3, 2026",
    "news_2_title": "Anti-Malaria Campaign: 2,000 mosquito nets distributed in Mopti region",
    "news_2_desc": "In partnership with the Ministry of Health, OPEN MALI distributed 2,000 treated mosquito nets in villages most affected by malaria.",
    "news_3_tag": "Women",
    "news_3_date": "May 20, 2026",
    "news_3_title": "PAFFIPE: 120 women earn their certification in entrepreneurship",
    "news_3_desc": "A graduation ceremony was held in Bamako to celebrate 120 women who successfully completed the PAFFIPE rural entrepreneurship training.",
    "news_read_more": "Read more →",
    "news_btn_all": "View all news →",

    // Impact
    "impact_label": "Our Impact",
    "impact_title": "24 Years of Measurable Impact",
    "impact_1_label": "Children in school",
    "impact_1_desc": "through the school sponsorship program",
    "impact_2_label": "COW Beneficiaries",
    "impact_2_desc": "Children Of the World",
    "impact_3_label": "Years of action",
    "impact_3_desc": "serving the people of Mali",
    "impact_4_label": "Regions covered",
    "impact_4_desc": "across the entire national territory",
    "impact_5_label": "Active programs",
    "impact_5_desc": "currently being deployed",
    "impact_6_label": "Intl. Partners",
    "impact_6_desc": "Diakonia, CFLI Canada, UN",

    // Donation
    "don_label": "Make a Donation",
    "don_title": "Your Generosity Changes Lives",
    "don_desc": "Every donation, big or small, enables OPEN MALI to continue its work on the ground. Support education, health, and empowerment in Mali.",
    "don_use_1": "<strong>25,000 FCFA</strong> – Sponsor a child for one whole year",
    "don_use_2": "<strong>10,000 FCFA</strong> – Mosquito net for a vulnerable family",
    "don_use_3": "<strong>5,000 FCFA</strong> – Complete school supply kit",
    "don_payment_title": "Available payment methods",
    "don_pay_orange": "📱 Orange Money: +223 77 12 13 14",
    "don_pay_moov": "📱 Moov Money: +223 77 12 13 14",
    "don_pay_card": "💳 Bank Card / Transfer",
    "don_form_title": "Choose your donation",
    "don_amount_label": "Amount (FCFA)",
    "don_custom_placeholder": "Other amount...",
    "don_freq_label": "Frequency",
    "don_freq_once": "One-time",
    "don_freq_monthly": "Monthly",
    "don_project_label": "Project to support",
    "don_opt_general": "General donation – Where the need is most urgent",
    "don_opt_sponsor": "School sponsorship program",
    "don_opt_health": "Health – Anti-malaria fight",
    "don_opt_women": "Women's empowerment",
    "don_opt_urg": "Emergency relief",
    "don_btn_text": "💚 I donate",
    "don_btn_currency": "FCFA",
    "don_security": "🔒 100% Secure Payment · Email Receipt",

    // Child Sponsorship (Parrainage)
    "spons_label": "Child Sponsorship",
    "spons_title": "Give a Child a Brighter Future",
    "spons_subtitle": "For just 25,000 FCFA per year, you enable a vulnerable child to stay in school and build a secure future.",
    "spons_how_title": "How does it work?",
    "spons_step1_title": "Choose your region",
    "spons_step1_desc": "Select the geographical area where you wish to have an impact",
    "spons_step2_title": "Fill in the form",
    "spons_step2_desc": "Your contact details and preferences in just a few minutes",
    "spons_step3_title": "Receive your child's profile",
    "spons_step3_desc": "OPEN MALI matches you with an identified child in need",
    "spons_step4_title": "Follow their journey",
    "spons_step4_desc": "Receive regular academic progress reports and updates",
    "spons_form_title": "Sponsorship Request",
    "spons_lbl_fname": "First Name *",
    "spons_ph_fname": "Your first name",
    "spons_lbl_lname": "Last Name *",
    "spons_ph_lname": "Your last name",
    "spons_lbl_email": "Email *",
    "spons_ph_email": "your@email.com",
    "spons_lbl_phone": "Phone Number",
    "spons_ph_phone": "+223...",
    "spons_lbl_region": "Preferred Region",
    "spons_opt_all_regions": "Any region",
    "spons_btn_submit": "🤝 Send My Application",
    "spons_note": "An OPEN MALI coordinator will contact you within 48 hours",

    // Volunteer (Bénévolat)
    "vol_label": "Volunteering & Membership",
    "vol_title": "Join the OPEN MALI Team",
    "vol_desc": "Your time and skills are priceless. Join our teams on the ground or online and contribute to our humanitarian mission.",
    "vol_m1": "🏫 Educational activities in local schools",
    "vol_m2": "🏥 Community healthcare awareness",
    "vol_m3": "💻 Digital support & communication",
    "vol_m4": "📊 Project monitoring and evaluation",
    "vol_m5": "🤝 Resource mobilization & partnerships",
    "vol_form_title": "Volunteer Application",
    "vol_lbl_fname": "First Name *",
    "vol_ph_fname": "First name",
    "vol_lbl_lname": "Last Name *",
    "vol_ph_lname": "Last name",
    "vol_lbl_email": "Email *",
    "vol_ph_email": "your@email.com",
    "vol_lbl_domain": "Area of Expertise *",
    "vol_opt_choose": "Choose a field",
    "vol_opt_edu": "Education / Teaching",
    "vol_opt_health": "Health / Medicine",
    "vol_opt_comm": "Communication / Digital",
    "vol_opt_law": "Law / Legal Affairs",
    "vol_opt_fin": "Finance / Accounting",
    "vol_opt_log": "Logistics / Field Ops",
    "vol_opt_other": "Other",
    "vol_lbl_motiv": "Motivations *",
    "vol_ph_motiv": "Why would you like to join OPEN MALI?",
    "vol_lbl_avail": "Availability",
    "vol_ph_avail": "E.g.: Weekends, part-time...",
    "vol_lbl_cv": "Resume / CV (optional)",
    "vol_btn_submit": "🚀 Submit Application",

    // Projects
    "proj_label": "Our Projects",
    "proj_title": "Concrete Achievements in the Field",
    "proj_subtitle": "Every project brings genuine transformation to the lives of thousands of Malians.",
    "proj_flagship": "Flagship Program",
    "proj_1_title": "School Sponsorship",
    "proj_1_desc": "Sponsorship program for vulnerable children at 25,000 FCFA/child/year. Covering multiple regions of Mali with individualized child tracking.",
    "proj_1_meta1": "📍 Nationwide",
    "proj_1_meta2": "👶 3,500+ children",
    "proj_1_prog_lbl": "Impact",
    "proj_2_title": "Children Of the World (COW)",
    "proj_2_desc": "Major international initiative benefiting thousands of Malian children, in partnership with global organizations.",
    "proj_2_meta1": "📍 Multiple regions",
    "proj_2_meta2": "👨‍👩‍👧‍👦 18,778 beneficiaries",
    "proj_3_title": "PAFFIPE",
    "proj_3_desc": "Financial empowerment and vocational training program for women and young girls in rural communities.",
    "proj_3_meta1": "📍 Rural areas",
    "proj_3_meta2": "♀️ Women & youth",
    "proj_4_title": "DAMBE",
    "proj_4_desc": "Capacity building and community development initiative serving the most vulnerable populations.",
    "proj_4_meta1": "📍 Local communities",
    "proj_4_meta2": "🏘️ Development",
    "proj_5_title": "SARE",
    "proj_5_desc": "Access to clean water, sanitation, and essential resources for underserved rural villages.",
    "proj_5_meta1": "📍 Rural",
    "proj_5_meta2": "🚰 Water & Health",
    "proj_6_title": "Anti-Malaria Program",
    "proj_6_desc": "Distribution of treated mosquito nets, awareness campaigns, and preventive care to curb child mortality from malaria.",
    "proj_6_meta1": "📍 Endemic zones",
    "proj_6_meta2": "🏥 Public health",

    // Transparency
    "transp_label": "Transparency",
    "transp_title": "An Open and Accountable NGO",
    "transp_subtitle": "We believe in total transparency with our donors, institutional partners, and beneficiaries.",
    "transp_annual_title": "Annual Reports",
    "transp_doc_2025_title": "Annual Report 2025",
    "transp_doc_2025_desc": "Key activities, results, and outlook",
    "transp_doc_2024_title": "Annual Report 2024",
    "transp_doc_2024_desc": "Comprehensive activity summary",
    "transp_fin_title": "Financial Reports",
    "transp_fin_2025_title": "2025 Budget Execution",
    "transp_fin_2025_desc": "Certified financial report",
    "transp_fin_2024_title": "External Audit 2024",
    "transp_fin_2024_desc": "Independent auditor's report",
    "transp_gov_title": "Governance",
    "transp_gov_pres": "President",
    "transp_gov_board": "OPEN MALI Executive Bureau",
    "transp_gov_sec": "Secretary General",
    "transp_gov_tres": "Treasurer",
    "transp_gov_note": "* Full organizational chart available on request",
    "transp_part_title": "Our Partners & Donors",
    "transp_part_un": "🌐 United Nations (ECOSOC)",
    "transp_part_diakonia": "🇸🇪 Diakonia",
    "transp_part_fcil": "🇨🇦 CFLI Canada",
    "transp_part_gov": "🇲🇱 Ministry of Humanitarian Action",
    "transp_part_local": "🤝 Local partners",

    // Testimonials
    "testim_label": "Testimonials",
    "testim_title": "Real Stories of Impact from OPEN MALI",
    "testim_1_quote": "« Thanks to OPEN MALI's sponsorship, I was able to complete primary school and I am now in high school. I want to become a doctor to care for my community. »",
    "testim_1_author": "Aminata, 15 years old",
    "testim_1_role": "Sponsored student, Ségou",
    "testim_2_quote": "« OPEN MALI gave us much more than material aid. They gave us confidence in ourselves and the tools to become self-reliant. Our cooperative now employs 25 women. »",
    "testim_2_author": "Fatoumata Coulibaly",
    "testim_2_role": "PAFFIPE program beneficiary, Sikasso",
    "testim_3_quote": "« I have been sponsoring a child for 3 years from Canada. The regular updates from OPEN MALI allow me to closely follow his progress. An extraordinary human bond. »",
    "testim_3_author": "Mohamed Traoré",
    "testim_3_role": "Sponsor, member of the Malian diaspora in Montreal",

    // Contact
    "contact_label": "Contact",
    "contact_title": "Get in Touch with OPEN MALI",
    "contact_subtitle": "A question, partnership idea, or project? Our team will get back to you promptly.",
    "contact_hq_title": "Headquarters",
    "contact_hq_desc": "Bamako, Republic of Mali",
    "contact_phone_title": "Phone",
    "contact_email_title": "Email",
    "contact_web_title": "Website",
    "contact_maps_link": "📍 View on Google Maps",
    "contact_lbl_fname": "First Name *",
    "contact_ph_fname": "Your first name",
    "contact_lbl_lname": "Last Name *",
    "contact_ph_lname": "Your last name",
    "contact_lbl_email": "Email *",
    "contact_ph_email": "your@email.com",
    "contact_lbl_subject": "Subject *",
    "contact_opt_choose": "Select a subject",
    "contact_opt_part": "Partnership",
    "contact_opt_don": "Donation / Funding",
    "contact_opt_press": "Press / Media",
    "contact_opt_vol": "Volunteering",
    "contact_opt_spons": "Sponsorship",
    "contact_opt_other": "Other",
    "contact_lbl_msg": "Message *",
    "contact_ph_msg": "Your message...",
    "contact_captcha_lbl": "I am not a robot",
    "contact_btn_submit": "📧 Send Message",

    // Newsletter
    "newslet_title": "Stay Informed of Our Work",
    "newslet_desc": "Receive our latest news, reports, and campaign updates directly in your inbox.",
    "newslet_placeholder": "Your email address",
    "newslet_btn": "Subscribe →",

    // Footer
    "footer_tagline": "« Yes, For a Noble Childhood »",
    "footer_desc": "Mali's first youth humanitarian NGO, founded in 2002. We strive for education, health, and dignity for all Malian communities.",
    "footer_group_org": "Organization",
    "footer_link_about": "About Us",
    "footer_link_history": "Our History",
    "footer_link_gov": "Governance",
    "footer_link_partners": "Our Partners",
    "footer_link_transp": "Transparency",
    "footer_group_act": "Take Action",
    "footer_link_donate": "Make a Donation",
    "footer_link_sponsor": "Sponsor a Child",
    "footer_link_vol": "Become a Volunteer",
    "footer_link_join": "Join the NGO",
    "footer_link_part": "Partnerships",
    "footer_group_prog": "Our Programs",
    "footer_link_p_spons": "School Sponsorship",
    "footer_link_p_cow": "Children of the World",
    "footer_link_p_paffipe": "PAFFIPE",
    "footer_link_p_dambe": "DAMBE",
    "footer_link_p_sare": "SARE",
    "footer_copy": "© 2026 OPEN MALI – Yes, For a Noble Childhood. All rights reserved.",
    "footer_legal": "Legal Notice",
    "footer_privacy": "Privacy Policy",
    "footer_sitemap": "Sitemap",

    // Modals
    "modal_don_title": "Complete Your Donation",
    "modal_don_p1_pre": "Your donation of ",
    "modal_don_p1_post": " FCFA will transform lives in Mali.",
    "modal_don_num_title": "Official Donation & Transfer Number:",
    "modal_don_num_holder": "Recipient: <strong>OPEN MALI (NGO)</strong>",
    "modal_don_btn_copy": "Copy number",
    "modal_don_btn_copied": "Copied!",
    "modal_don_btn_call": "Call",
    "modal_don_btn_wa": "WhatsApp",
    "modal_don_instructions_title": "Transfer Instructions:",
    "modal_don_step1": "Transfer the amount to <strong>+223 77 12 13 14</strong> via <strong>Orange Money</strong> or <strong>Moov Money</strong>.",
    "modal_don_step2": "Specify your name or project in the transfer note.",
    "modal_don_step3": "Click WhatsApp or contact us at <strong>+223 77 12 13 14</strong> to confirm and receive your receipt.",
    "modal_don_p2": "Our team remains available at +223 77 12 13 14 to assist you.",
    "modal_don_share": "Share your gesture:",
    "modal_btn_close": "Close",
    "modal_succ_title": "Message Sent!",
    "modal_succ_msg": "Our team will respond to you as soon as possible."
  }
};

// Dynamic JS Messages Translations
const MESSAGES = {
  fr: {
    spons_success_title: "🤝 Demande reçue !",
    spons_success_msg: (name) => `Merci ${name} ! Un responsable OPEN MALI vous contactera sous 48h pour votre demande de parrainage.`,
    vol_success_title: "🚀 Candidature envoyée !",
    vol_success_msg: (name) => `Merci ${name} ! Votre candidature bénévole a bien été reçue. Notre équipe vous répondra très prochainement.`,
    contact_success_title: "📧 Message envoyé !",
    contact_success_msg: (name) => `Merci ${name} ! Votre message a bien été reçu. Notre équipe vous répondra dans les plus brefs délais.`,
    contact_captcha_alert: "Veuillez cocher la case \"Je ne suis pas un robot\".",
    newslet_success_title: "📬 Inscription confirmée !",
    newslet_success_msg: (email) => `L'adresse ${email} a été ajoutée à notre liste de diffusion. Bienvenue dans la famille OPEN MALI !`,
    download_toast: (doc) => `📥 Téléchargement de "${doc}" en cours...`,
    copied_toast: "📋 Numéro (+223 77 12 13 14) copié dans le presse-papiers !",
    share_text: "Je viens de soutenir OPEN MALI, ONG humanitaire au Mali ! Rejoignez-nous 💛",
    lang_switched: "🌐 Version française activée"
  },
  en: {
    spons_success_title: "🤝 Application Received!",
    spons_success_msg: (name) => `Thank you ${name}! An OPEN MALI coordinator will contact you within 48 hours regarding your sponsorship request.`,
    vol_success_title: "🚀 Application Submitted!",
    vol_success_msg: (name) => `Thank you ${name}! Your volunteer application has been received. Our team will reach out to you shortly.`,
    contact_success_title: "📧 Message Sent!",
    contact_success_msg: (name) => `Thank you ${name}! Your message has been received. Our team will reply as soon as possible.`,
    contact_captcha_alert: "Please check the box \"I am not a robot\".",
    newslet_success_title: "📬 Subscription Confirmed!",
    newslet_success_msg: (email) => `The address ${email} has been added to our mailing list. Welcome to the OPEN MALI family!`,
    download_toast: (doc) => `📥 Downloading "${doc}"...`,
    copied_toast: "📋 Number (+223 77 12 13 14) copied to clipboard!",
    share_text: "I just supported OPEN MALI, a youth humanitarian NGO in Mali! Join us 💛",
    lang_switched: "🌐 Switched to English"
  }
};

// Current language
let currentLang = localStorage.getItem('openmali_lang') || 'fr';

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top visibility
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

function toggleNav() {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
}

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HERO PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 25;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
    particle.style.animationDelay = (Math.random() * 8) + 's';
    particle.style.width = particle.style.height = (Math.random() * 4 + 2) + 'px';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    container.appendChild(particle);
  }
}
createParticles();

// ===== ANIMATED COUNTERS =====
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const locale = currentLang === 'en' ? 'en-US' : 'fr-FR';
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString(locale);
  }, 16);
}

// Hero stats counters
const heroCounters = document.querySelectorAll('.stat-number[data-target]');
let heroCountersStarted = false;

// Main impact counters
const impactCounters = document.querySelectorAll('.counter[data-target]');
let impactCountersStarted = false;

// ===== INTERSECTION OBSERVER =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Hero stats
      if (entry.target.classList.contains('hero-stats') && !heroCountersStarted) {
        heroCountersStarted = true;
        heroCounters.forEach(counter => {
          animateCounter(counter, parseInt(counter.dataset.target));
        });
      }

      // Impact counters
      if (entry.target.classList.contains('impact') && !impactCountersStarted) {
        impactCountersStarted = true;
        impactCounters.forEach(counter => {
          animateCounter(counter, parseInt(counter.dataset.target));
        });
      }
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('section, .hero-stats, .reveal').forEach(el => {
  observer.observe(el);
});

// ===== DONATION FORM =====
let selectedAmount = 10000;
let selectedFreq = 'ponctuel';

function selectAmount(btn, amount) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedAmount = amount;
  updateDonateButton();
  const custom = document.getElementById('customAmount');
  if (custom) custom.value = '';
}

function selectFreq(btn, freq) {
  document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedFreq = freq;
}

function updateDonateButton() {
  const donateBtn = document.getElementById('donateBtn');
  if (!donateBtn) return;
  const locale = currentLang === 'en' ? 'en-US' : 'fr-FR';
  const prefix = TRANSLATIONS[currentLang]["don_btn_text"] || "💚 Je fais un don de";
  const curr = TRANSLATIONS[currentLang]["don_btn_currency"] || "FCFA";
  donateBtn.innerHTML = `${prefix} <span id="donateAmount">${selectedAmount.toLocaleString(locale)}</span> ${curr}`;
}

const customAmountInput = document.getElementById('customAmount');
if (customAmountInput) {
  customAmountInput.addEventListener('input', function () {
    const val = parseInt(this.value);
    if (!isNaN(val) && val > 0) {
      selectedAmount = val;
      updateDonateButton();
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    }
  });
}

function getProjectLabel(projectKey) {
  const select = document.getElementById('donProject');
  if (select) {
    const opt = select.querySelector(`option[value="${projectKey}"]`);
    if (opt) return opt.textContent.trim();
  }
  return projectKey;
}

function processDonation() {
  const projectEl = document.getElementById('donProject');
  const project = projectEl ? projectEl.value : 'general';
  showDonationModal(selectedAmount, project, selectedFreq);
}

function showDonationModal(amount, project, freq) {
  const amt = amount || selectedAmount || 10000;
  const locale = currentLang === 'en' ? 'en-US' : 'fr-FR';
  const modalAmount = document.getElementById('modalAmount');
  if (modalAmount) {
    modalAmount.textContent = amt.toLocaleString(locale);
  }

  // Pre-fill WhatsApp message dynamically with donor's chosen amount & project
  const modalWaBtn = document.getElementById('modalWaBtn');
  if (modalWaBtn) {
    const formattedAmt = amt.toLocaleString(locale);
    const projectName = getProjectLabel(project || (document.getElementById('donProject')?.value || 'general'));
    const waText = currentLang === 'en'
      ? `Hello OPEN MALI, I would like to make a donation of ${formattedAmt} FCFA for "${projectName}".`
      : `Bonjour OPEN MALI, je souhaite effectuer un don de ${formattedAmt} FCFA pour le projet "${projectName}".`;
    modalWaBtn.href = `https://wa.me/22377121314?text=${encodeURIComponent(waText)}`;
  }

  const donationModal = document.getElementById('donationModal');
  if (donationModal) {
    donationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function copyDonationNumber() {
  const formattedNumber = "+223 77 12 13 14";
  const rawNumber = "+22377121314";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formattedNumber).catch(() => {
      fallbackCopy(formattedNumber);
    });
  } else {
    fallbackCopy(formattedNumber);
  }

  // Button visual animation
  const btn = document.getElementById('btnCopyNum');
  const btnText = document.getElementById('btnCopyText');
  const btnIcon = document.getElementById('btnCopyIcon');
  if (btn && btnText) {
    btn.classList.add('copied');
    btnText.textContent = TRANSLATIONS[currentLang]["modal_don_btn_copied"] || "Copié !";
    if (btnIcon) btnIcon.textContent = "✅";
    setTimeout(() => {
      btn.classList.remove('copied');
      btnText.textContent = TRANSLATIONS[currentLang]["modal_don_btn_copy"] || "Copier le numéro";
      if (btnIcon) btnIcon.textContent = "📋";
    }, 2500);
  }

  // Floating Toast notification
  const toastMsg = MESSAGES[currentLang]?.copied_toast || `📋 Numéro (${formattedNumber}) copié !`;
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: #0F0A04; color: #F5C518; padding: 14px 28px; border-radius: 999px;
    font-size: 0.9rem; font-weight: 700; z-index: 99999; 
    border: 1px solid rgba(245,197,24,0.3);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s ease;
  `;
  popup.textContent = toastMsg;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {}
  document.body.removeChild(textArea);
}

function closeDonationModal(e) {
  if (e.target === document.getElementById('donationModal')) {
    closeDonationModalBtn();
  }
}
function closeDonationModalBtn() {
  const modal = document.getElementById('donationModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SUCCESS MODAL =====
function showSuccess(title, message) {
  const titleEl = document.getElementById('successTitle');
  const msgEl = document.getElementById('successMessage');
  const modalEl = document.getElementById('successModal');
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (modalEl) {
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
function closeSuccessModal(e) {
  if (e.target === document.getElementById('successModal')) {
    closeSuccessModalBtn();
  }
}
function closeSuccessModalBtn() {
  const modal = document.getElementById('successModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SPONSORSHIP FORM =====
function submitSponsorship(e) {
  e.preventDefault();
  const firstName = document.getElementById('sponsorFirstName')?.value || '';
  const langMsg = MESSAGES[currentLang];
  showSuccess(
    langMsg.spons_success_title,
    langMsg.spons_success_msg(firstName)
  );
  e.target.reset();
}

// ===== VOLUNTEER FORM =====
function submitVolunteer(e) {
  e.preventDefault();
  const firstName = document.getElementById('volFirstName')?.value || '';
  const langMsg = MESSAGES[currentLang];
  showSuccess(
    langMsg.vol_success_title,
    langMsg.vol_success_msg(firstName)
  );
  e.target.reset();
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  const captcha = document.getElementById('captchaCheck');
  const langMsg = MESSAGES[currentLang];
  if (captcha && !captcha.checked) {
    alert(langMsg.contact_captcha_alert);
    return;
  }
  const firstName = document.getElementById('contactFirstName')?.value || '';
  showSuccess(
    langMsg.contact_success_title,
    langMsg.contact_success_msg(firstName)
  );
  e.target.reset();
}

// ===== NEWSLETTER =====
function submitNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail')?.value || '';
  const langMsg = MESSAGES[currentLang];
  showSuccess(
    langMsg.newslet_success_title,
    langMsg.newslet_success_msg(email)
  );
  e.target.reset();
}

// ===== NEWS FILTER =====
function filterNews(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.news-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      setTimeout(() => { card.style.display = 'none'; }, 300);
    }
  });
}

// ===== DOCUMENT DOWNLOAD =====
function downloadDoc(docName) {
  const langMsg = MESSAGES[currentLang];
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: #0F0A04; color: #F5C518; padding: 14px 28px; border-radius: 999px;
    font-size: 0.9rem; font-weight: 700; z-index: 9999; 
    border: 1px solid rgba(245,197,24,0.3);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s ease;
  `;
  popup.textContent = langMsg.download_toast(docName);
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

// ===== SOCIAL SHARE =====
function share(platform) {
  const text = MESSAGES[currentLang].share_text;
  const url = 'https://openmali.org';
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
  };
  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=400');
  }
}

// ===== CORE TRANSLATION ENGINE =====
function applyLanguage(lang, showToast = false) {
  currentLang = lang;
  localStorage.setItem('openmali_lang', lang);
  document.documentElement.lang = lang;

  // Toggle button state
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? '🌐 FR' : '🌐 EN';
  }

  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // 1. Elements with data-i18n key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // 3. Fallback for elements with data-fr / data-en attributes
  document.querySelectorAll('[data-fr]').forEach(el => {
    const val = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-fr');
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
    const val = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-fr-placeholder');
    if (val) el.placeholder = val;
  });

  // 4. Update donation button dynamic string
  updateDonateButton();

  // 5. Optional Notification Toast
  if (showToast) {
    const popup = document.createElement('div');
    popup.style.cssText = `
      position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
      background: #0F0A04; color: #F5C518; padding: 14px 28px; border-radius: 999px;
      font-size: 0.9rem; font-weight: 700; z-index: 9999;
      border: 1px solid rgba(245,197,24,0.3);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn .3s ease;
    `;
    popup.textContent = MESSAGES[lang].lang_switched;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 2500);
  }
}

function toggleLang() {
  const newLang = currentLang === 'fr' ? 'en' : 'fr';
  applyLanguage(newLang, true);
}

// ===== SMOOTH SCROLL FOR ALL ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll(
  '.domain-card, .project-card, .impact-item, .testimonial-card, .news-card, .doc-category, .step'
);
revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
  observer.observe(el);
});

// ===== PROGRESS BAR ANIMATION =====
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.progress-fill');
      fills.forEach(fill => {
        const target = fill.style.width;
        fill.style.width = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            fill.style.width = target;
          });
        });
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.project-card').forEach(card => {
  progressObserver.observe(card);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang, false);
});
// Also apply immediately
applyLanguage(currentLang, false);

console.log('🇲🇱 OPEN MALI – Oui, Pour une Enfance Noble');
console.log('Site web initialisé avec succès. Langue active :', currentLang);
