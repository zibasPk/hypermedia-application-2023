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
        int member_code PK
        string name
        string surname
        int age
        string role
    }
    curriculum {
        int member_code PK
    }
    area {
        int area_code PK
        string name
        string description
        int data1
    }
    project {
        int project_code PK
        string name
        string description
        int supervisor
        int relevance
        int data1
    }

    team_member ||--|| curriculum : has
    team_member ||--|{ project : supervises
    area }|--|{ project: has

```
