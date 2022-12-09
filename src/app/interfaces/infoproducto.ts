export interface InfoProducto {
    code?:           string;
    product?:        Product;
    status?:         number;
    status_verbose?: string;
}

export interface Product {
    _id?:                                        string;
    _keywords?:                                  string[];
    added_countries_tags?:                       any[];
    additives_old_tags?:                         any[];
    additives_original_tags?:                    any[];
    additives_tags?:                             any[];
    allergens?:                                  string;
    allergens_from_ingredients?:                 string;
    allergens_from_user?:                        string;
    allergens_hierarchy?:                        any[];
    allergens_lc?:                               string;
    allergens_tags?:                             any[];
    amino_acids_tags?:                           any[];
    brands?:                                     string;
    brands_tags?:                                string[];
    categories?:                                 string;
    categories_hierarchy?:                       string[];
    categories_lc?:                              string;
    categories_old?:                             string;
    categories_properties?:                      CategoriesProperties;
    categories_properties_tags?:                 string[];
    categories_tags?:                            string[];
    category_properties?:                        CategoriesProperties;
    checkers_tags?:                              any[];
    ciqual_food_name_tags?:                      string[];
    cities_tags?:                                any[];
    code?:                                       string;
    codes_tags?:                                 string[];
    compared_to_category?:                       string;
    complete?:                                   number;
    completeness?:                               number;
    correctors_tags?:                            string[];
    countries?:                                  string;
    countries_hierarchy?:                        string[];
    countries_lc?:                               string;
    countries_tags?:                             string[];
    created_t?:                                  number;
    creator?:                                    string;
    data_quality_bugs_tags?:                     any[];
    data_quality_errors_tags?:                   any[];
    data_quality_info_tags?:                     string[];
    data_quality_tags?:                          string[];
    data_quality_warnings_tags?:                 string[];
    data_sources?:                               string;
    data_sources_tags?:                          string[];
    debug_param_sorted_langs?:                   string[];
    ecoscore_data?:                              EcoscoreData;
    ecoscore_grade?:                             string;
    ecoscore_tags?:                              string[];
    editors_tags?:                               string[];
    emb_codes?:                                  string;
    emb_codes_tags?:                             any[];
    entry_dates_tags?:                           string[];
    expiration_date?:                            string;
    food_groups?:                                string;
    food_groups_tags?:                           string[];
    generic_name_es?:                            string;
    id?:                                         string;
    image_front_small_url?:                      string;
    image_front_thumb_url?:                      string;
    image_front_url?:                            string;
    image_nutrition_small_url?:                  string;
    image_nutrition_thumb_url?:                  string;
    image_nutrition_url?:                        string;
    image_small_url?:                            string;
    image_thumb_url?:                            string;
    image_url?:                                  string;
    images?:                                     Images;
    informers_tags?:                             string[];
    ingredients_from_palm_oil_tags?:             any[];
    ingredients_hierarchy?:                      any[];
    ingredients_text_es?:                        any;
    ingredients_text_with_allergens?:            string;
    ingredients_text_with_allergens_es?:         string;
    ingredients_that_may_be_from_palm_oil_tags?: any[];
    interface_version_created?:                  string;
    interface_version_modified?:                 string;
    labels?:                                     string;
    labels_hierarchy?:                           any[];
    labels_lc?:                                  string;
    labels_old?:                                 string;
    labels_tags?:                                any[];
    lang?:                                       string;
    languages?:                                  Languages;
    languages_codes?:                            LanguagesCodes;
    languages_hierarchy?:                        string[];
    languages_tags?:                             string[];
    last_edit_dates_tags?:                       string[];
    last_editor?:                                string;
    last_image_dates_tags?:                      string[];
    last_image_t?:                               number;
    last_modified_by?:                           string;
    last_modified_t?:                            number;
    lc?:                                         string;
    link?:                                       string;
    main_countries_tags?:                        any[];
    manufacturing_places?:                       string;
    manufacturing_places_tags?:                  any[];
    max_imgid?:                                  string;
    minerals_tags?:                              any[];
    misc_tags?:                                  string[];
    no_nutrition_data?:                          string;
    nova_group_debug?:                           string;
    nova_group_error?:                           string;
    nova_groups_tags?:                           string[];
    nucleotides_tags?:                           any[];
    nutrient_levels?:                            CategoriesProperties;
    nutrient_levels_tags?:                       any[];
    nutriments?:                                 CategoriesProperties;
    nutrition_data?:                             string;
    nutrition_data_per?:                         string;
    nutrition_data_prepared?:                    string;
    nutrition_data_prepared_per?:                string;
    nutrition_grades_tags?:                      string[];
    nutrition_score_beverage?:                   number;
    nutrition_score_debug?:                      string;
    nutrition_score_warning_no_fiber?:           number;
    origins?:                                    string;
    origins_hierarchy?:                          any[];
    origins_lc?:                                 string;
    origins_old?:                                string;
    origins_tags?:                               any[];
    other_nutritional_substances_tags?:          any[];
    packaging?:                                  string;
    packaging_hierarchy?:                        any[];
    packaging_lc?:                               string;
    packaging_old?:                              string;
    packaging_tags?:                             any[];
    packagings?:                                 any[];
    photographers_tags?:                         string[];
    pnns_groups_1?:                              string;
    pnns_groups_1_tags?:                         string[];
    pnns_groups_2?:                              string;
    pnns_groups_2_tags?:                         string[];
    popularity_key?:                             number;
    product_name?:                               string;
    product_name_es?:                            string;
    purchase_places?:                            string;
    purchase_places_tags?:                       any[];
    quantity?:                                   string;
    removed_countries_tags?:                     any[];
    rev?:                                        number;
    selected_images?:                            SelectedImages;
    sortkey?:                                    number;
    states?:                                     string;
    states_hierarchy?:                           string[];
    states_tags?:                                string[];
    stores?:                                     string;
    stores_tags?:                                any[];
    traces?:                                     string;
    traces_from_ingredients?:                    string;
    traces_from_user?:                           string;
    traces_hierarchy?:                           any[];
    traces_lc?:                                  string;
    traces_tags?:                                any[];
    unknown_nutrients_tags?:                     any[];
    update_key?:                                 string;
    vitamins_tags?:                              any[];
}

export interface CategoriesProperties {
}

export interface EcoscoreData {
    adjustments?:                      Adjustments;
    agribalyse?:                       Agribalyse;
    missing?:                          Missing;
    missing_agribalyse_match_warning?: number;
    missing_key_data?:                 number;
    scores?:                           CategoriesProperties;
    status?:                           string;
}

export interface Adjustments {
    origins_of_ingredients?: OriginsOfIngredients;
    packaging?:              Packaging;
    production_system?:      ProductionSystem;
    threatened_species?:     Agribalyse;
}

export interface OriginsOfIngredients {
    aggregated_origins?:         AggregatedOrigin[];
    epi_score?:                  number;
    epi_value?:                  number;
    origins_from_origins_field?: string[];
    transportation_score?:       number;
    transportation_scores?:      { [key: string]: number };
    transportation_value?:       number;
    transportation_values?:      { [key: string]: number };
    value?:                      number;
    values?:                     { [key: string]: number };
    warning?:                    string;
}

export interface AggregatedOrigin {
    epi_score?:            number;
    origin?:               string;
    percent?:              number;
    transportation_score?: null;
}

export interface Packaging {
    non_recyclable_and_non_biodegradable_materials?: number;
    value?:                                          number;
    warning?:                                        string;
}

export interface ProductionSystem {
    labels?:  any[];
    value?:   number;
    warning?: string;
}

export interface Agribalyse {
    warning?: string;
}

export interface Missing {
    agb_category?: number;
    ingredients?:  number;
    labels?:       number;
    origins?:      number;
    packagings?:   number;
}

export interface Images {
    "1"?:          The1;
    "2"?:          The1;
    front_es?:     Es;
    nutrition_es?: Es;
}

export interface The1 {
    sizes?:      Sizes;
    uploaded_t?: number;
    uploader?:   string;
}

export interface Sizes {
    "100"?: The100;
    "400"?: The100;
    full?:  The100;
    "200"?: The100;
}

export interface The100 {
    h?: number;
    w?: number;
}

export interface Es {
    angle?:       number;
    geometry?:    string;
    imgid?:       string;
    normalize?:   null;
    rev?:         string;
    sizes?:       Sizes;
    white_magic?: null;
    x1?:          string;
    x2?:          string;
    y1?:          string;
    y2?:          string;
}

export interface Languages {
    "en:spanish"?: number;
}

export interface LanguagesCodes {
    es?: number;
}

export interface SelectedImages {
    front?:     Front;
    nutrition?: Front;
}

export interface Front {
    display?: Display;
    small?:   Display;
    thumb?:   Display;
}

export interface Display {
    es?: string;
}
