# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :days


## nutritions テーブル

| Column      | Type     | Options     |
| ----------- | -------- | ----------- |
| day         | datetime | null: false |
| calculation | string   | null: false |

### Association

- belongs_to :user

## Name
NUTRITION_APP

## Overview
食材の栄養価を計算することが出来るアプリ

## Description
材料名を選択して食べた量を入力すると摂取栄養素を計算してくれる。

・料理や野菜などの材料がプルダウンで表示され、選択する。

・実際に食べた量を入力する。

## Demo
https://i.gyazo.com/926220587eb2d89ece78ad727dfffe3d.mp4

## NOTE
※テーブルは作成はしているが現時点では使用していない。
