# Hypermedia All JavaScript, But Really (TypeScript)

<!--
|o	o|	Zero or one
||	||	Exactly one
}o	o{	Zero or more (no upper limit)
}|	|{	One or more (no upper limit) 
-->
```mermaid
erDiagram 
    team_member {
        int memberCode PK
        string name
        string surname
        int age
        string role
    }
    curriculum {
        int memberCode PK
    }
    area {
        int areaCode PK
        string name
        string description
        int data1
        int data2
        int data3
    }
    project {
        int projectCode PK
        string description
        int data1
        int data2
        int data3
    }

    team_member ||--|| curriculum : has
    team_member ||--|{ project : supervises
    area }|--|{ project: has

```
