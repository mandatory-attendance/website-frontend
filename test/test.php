<?php 
    $api_url = "https://www.data.qld.gov.au/api/1/util/snippet/api_info.html?resource_id=3562cff7-b4dc-4b62-8e55-3ade0df2e77b";

    $data = file_get_contents($api_url);

    $data = json_decode($data,true);

    $input_english = $_GET['english-word'];
    $input_indi = $_GET['indigenous-word'];

    if(is_array($data)) {
        foreach($data as $english => $indi) {

        }
    }
    
    function get_translation_to_indi($input_english) {
        
    }

    function get_translation_to_english($input_indi) {

    }
?>