<?php
    function fillRandom($dataset){
        $min=0;
        $max=100;
        for($i=0;$i<10;$i++){
            $aux=random_int($min,$max);
            array_push($dataset,$aux);
        }
        return $dataset;
    }

    function average($dataset){
        $size=sizeof($dataset);
        $accum=0;
        for($i=0;$i<$size;$i++){
            $accum+=$dataset[$i];
        }
        return ($accum/$size);
    }

    function median(&$dataset){
        sort($dataset);
        $size=sizeof($dataset);
        if($size%2==0){
            $index1=($size/2)-1;
            $index2=($size/2);
            return(($dataset[$index1]+$dataset[$index2])/2);
        }else{
            $index=ceil($size/2);
            return($dataset[$index]);
        }
    }

    function displayContent($dataset){
        $dataset=fillRandom($dataset);
        $size=sizeof($dataset);
        for($i=0;$i<$size;$i++){
            echo($dataset[$i].",");
        }
        echo("<br>");
        echo("<ul>");
        $average=average($dataset);
        $median=median($dataset);
        echo("<li>"."The average of this set is: ".$average."</li>");
        echo("<li>"."The median of this set is: ".$median."</li>");
        sort($dataset);
        for($i=0;$i<$size;$i++){
            $dataset[$i]=(string)$dataset[$i];
        }
        $sortArrayString=implode(",",$dataset);
        echo("<li>".$sortArrayString."</li>");
        
        rsort($dataset);
        for($i=0;$i<$size;$i++){
            $dataset[$i]=(string)$dataset[$i];
        }
        $reverseSortArrayString=implode(",",$dataset);
        echo("<li>".$reverseSortArrayString."</li>");
        echo("</ul>");
    }

    function powerTable(){
        include("_form.html");
        include("_bodyLast.html");
            if(isset($_GET['data'])){
                $number=$_GET['data'];
                echo("<table>");
                for($i=1;$i<=$number;$i++){
                    echo("<tr>");
                        echo("<td>"."<b>".$i."</b>"." ".$i*$i."</td>");
                        echo("<td>".$i*$i*$i."</td>");
                    echo("</tr>");
                }
                echo("</table>");
            }
    }
?>