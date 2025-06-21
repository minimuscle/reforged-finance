export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      cash: {
        Row: {
          amount: number
          color: string | null
          created_at: string
          currency: Database["public"]["Enums"]["currency"]
          icon: string | null
          id: number
          name: string
          user_id: string
        }
        Insert: {
          amount?: number
          color?: string | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          icon?: string | null
          id?: number
          name?: string
          user_id: string
        }
        Update: {
          amount?: number
          color?: string | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          icon?: string | null
          id?: number
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      debts: {
        Row: {
          amount: number
          annual_interest: number
          color: string | null
          created_at: string
          currency: Database["public"]["Enums"]["currency"]
          icon: string | null
          id: number
          interest_frequency: Database["public"]["Enums"]["frequency"]
          name: string
          regular_payment: number
          starting_balance: number
          user_id: string
        }
        Insert: {
          amount?: number
          annual_interest?: number
          color?: string | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          icon?: string | null
          id?: number
          interest_frequency?: Database["public"]["Enums"]["frequency"]
          name?: string
          regular_payment?: number
          starting_balance?: number
          user_id?: string
        }
        Update: {
          amount?: number
          annual_interest?: number
          color?: string | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          icon?: string | null
          id?: number
          interest_frequency?: Database["public"]["Enums"]["frequency"]
          name?: string
          regular_payment?: number
          starting_balance?: number
          user_id?: string
        }
        Relationships: []
      }
      history: {
        Row: {
          cash: number
          created_at: string
          debts: number
          id: number
          salaried_income: number
          super: number
          user_id: string
        }
        Insert: {
          cash?: number
          created_at?: string
          debts?: number
          id?: number
          salaried_income?: number
          super?: number
          user_id?: string
        }
        Update: {
          cash?: number
          created_at?: string
          debts?: number
          id?: number
          salaried_income?: number
          super?: number
          user_id?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          cash_goal: number | null
          created_at: string
          currency: Database["public"]["Enums"]["currency"]
          delivery_email: string | null
          emergency_fund_goal: number | null
          employment_income: number | null
          home_deposit: boolean
          home_deposit_goal: number | null
          id: string
          lifetime_premium: boolean
          name: string | null
          net_income: number | null
          premium: boolean
          salary_frequency: Database["public"]["Enums"]["frequency"]
        }
        Insert: {
          cash_goal?: number | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          delivery_email?: string | null
          emergency_fund_goal?: number | null
          employment_income?: number | null
          home_deposit?: boolean
          home_deposit_goal?: number | null
          id: string
          lifetime_premium?: boolean
          name?: string | null
          net_income?: number | null
          premium?: boolean
          salary_frequency?: Database["public"]["Enums"]["frequency"]
        }
        Update: {
          cash_goal?: number | null
          created_at?: string
          currency?: Database["public"]["Enums"]["currency"]
          delivery_email?: string | null
          emergency_fund_goal?: number | null
          employment_income?: number | null
          home_deposit?: boolean
          home_deposit_goal?: number | null
          id?: string
          lifetime_premium?: boolean
          name?: string | null
          net_income?: number | null
          premium?: boolean
          salary_frequency?: Database["public"]["Enums"]["frequency"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      currency: "AUD"
      frequency: "daily" | "weekly" | "fortnightly" | "monthly" | "quarterly"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

